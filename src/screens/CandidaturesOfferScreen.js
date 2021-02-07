import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Row, Col, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { getCandidaturesOffer } from '../actions/candidaturesActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

const CandidaturesOfferScreen = ({ match, history }) => {
  const dispatch = useDispatch();
  const offerId = match.params.id;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const candidaturesOffer = useSelector((state) => state.candidaturesOffer);
  const { Loading, candidatures, error } = candidaturesOffer;
  useEffect(() => {
    if (userInfo && userInfo.user.role === 'RECRUTEUR') {
      dispatch(getCandidaturesOffer(offerId));
    } else {
      history.push('/signin');
    }
  }, [dispatch, history, userInfo]);

  return (
    <>
      <Row>
        <Col>
          <h3 className='my-1 py-2'>Candidatures Offer</h3>
        </Col>
        <Col>
          <Button
            className='my-3 btn-sm py-1'
            onClick={() => {
              history.push('/recruteur/offres');
            }}
            style={{ float: 'right' }}
          >
            Retour
          </Button>
        </Col>
      </Row>
      {Loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : candidatures.length === 0 ? (
        <h3>Oups,cette offre n a pas de candidatures</h3>
      ) : (
        <Table striped bordered hover className='sm' responsive>
          <thead>
            <tr>
              <th></th>
              <th>Date</th>
              <th>CANDIDAT</th>
              <th>STATUS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {candidatures.map((candidature, index) => (
              <tr key={candidature.code}>
                <td>{index + 1}</td>
                <td>
                  {candidature.postedAt.slice(0, 10)}
                  <span> </span>
                  {candidature.postedAt.slice(11, 19)}
                </td>
                <td>
                  {candidature.owner.firstName}
                  <span> </span>
                  {candidature.owner.lastName}
                </td>
                <td>
                  {candidature.status === 'VALIDEE' ? (
                    <i className='fas fa-check' style={{ color: 'green' }}></i>
                  ) : candidature.status === 'EN_ATTENTE' ? (
                    <p>En Cours</p>
                  ) : candidature.status === 'REFUSEE' ? (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  ) : null}
                </td>
                <td>
                  <LinkContainer
                    to={`/offer/${offerId}/candidatures/${candidature.code}`}
                  >
                    <Button variant='secondary' className='btn-sm'>
                      Examiner
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default CandidaturesOfferScreen;
