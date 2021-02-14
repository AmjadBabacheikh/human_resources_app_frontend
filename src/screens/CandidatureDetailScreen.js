import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import { SizeMe } from 'react-sizeme';
import { Col, Row, Button, ListGroup } from 'react-bootstrap';
import {
  getCandidatureDetail,
  getCandidatureOwnerCV,
  getCandidatureOwnerPDP,
  changerCandidatureStatus,
} from '../actions/candidaturesActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const CandidatureDetailScreen = ({ match, history }) => {
  const dispatch = useDispatch();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const offerId = match.params.offerId;
  const candidatureId = match.params.candidatureId;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const detailCandidature = useSelector((state) => state.detailCandidature);
  const { Loading, candidature, error } = detailCandidature;
  const candidatureOwnerCv = useSelector((state) => state.candidatureOwnerCv);
  const { Loading: LoadingCV, cv, error: errorCV } = candidatureOwnerCv;
  const candidatureOwnerPdp = useSelector((state) => state.candidatureOwnerPdp);
  const {
    Loading: LoadingImage,
    image,
    error: errorImage,
  } = candidatureOwnerPdp;
  const changeStatusCandidature = useSelector(
    (state) => state.changeStatusCandidature
  );
  const { success } = changeStatusCandidature;
  useEffect(() => {
    if (userInfo && userInfo.user.role === 'RECRUTEUR') {
      dispatch(getCandidatureDetail(offerId, candidatureId));
      dispatch(getCandidatureOwnerPDP(offerId, candidatureId));
      dispatch(getCandidatureOwnerCV(offerId, candidatureId));
    } else {
      history.push('/signin');
    }
  }, [dispatch, history, userInfo, success]);
  const isEmpty = function (obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <>
      {Loading ? (
        <Loader />
      ) : error ? (
        <Message varaint='danger'>{error}</Message>
      ) : (
        <Row>
          <Col md={6} xs={12} className='my-3'>
            <Button
              className='my-3 btn-sm py-1'
              onClick={() => {
                history.push(`/candidatures/offer/${offerId}`);
              }}
            >
              <i className='fas fa-arrow-alt-circle-left'></i>
            </Button>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Offre :</Col>
                  <Col className='info'>
                    <strong>
                      {!isEmpty(candidature)
                        ? candidature.theOffer.title
                        : null}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Candidat :</Col>
                  <Col className='info'>
                    <strong>
                      {!isEmpty(candidature)
                        ? candidature.owner.firstName
                        : null}
                      <span> </span>
                      {!isEmpty(candidature)
                        ? candidature.owner.lastName
                        : null}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Profil linkedin :</Col>
                  <Col className='info'>
                    <strong>
                      {!isEmpty(candidature) ? candidature.answers[0] : null}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Motivation :</Col>
                  <Col>
                    <p>
                      {!isEmpty(candidature) ? candidature.motivation : null}
                    </p>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status :</Col>
                  <Col className='info'>
                    <strong>
                      {!isEmpty(candidature) ? candidature.status : null}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
            <div>
              <Button
                variant='success'
                className=' my-2'
                onClick={() => {
                  dispatch(
                    changerCandidatureStatus(offerId, candidatureId, 'VALIDEE')
                  );
                }}
              >
                Accepter
              </Button>
              <Button
                variant='secondary'
                className=' my-2 mx-2'
                onClick={() => {
                  dispatch(
                    changerCandidatureStatus(offerId, candidatureId, 'REFUSEE')
                  );
                }}
              >
                Refuser
              </Button>
            </div>
          </Col>
          <Col md={6} xs={12}>
            {LoadingCV ? (
              <Loader />
            ) : errorCV ? (
              <h5 style={{ textAlign: 'center', margin: '4rem' }}>
                Candidat ne possedant pas de cv
              </h5>
            ) : (
              <SizeMe
                monitorHeight
                refreshRate={128}
                refreshMode={'debounce'}
                render={({ size }) => (
                  <div className='profile-cv'>
                    <Document file={cv} onLoadSuccess={onDocumentLoadSuccess}>
                      <Page
                        pageNumber={pageNumber}
                        width={size.width}
                        size='A4'
                      />
                    </Document>
                  </div>
                )}
              />
            )}
          </Col>
        </Row>
      )}
    </>
  );
};

export default CandidatureDetailScreen;
