import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Row, Col, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {
  getMyCandidatures,
  annulerCandidature,
} from '../actions/candidaturesActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

const CandidaturesUserScreen = ({ history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const candidatCandidatures = useSelector(
    (state) => state.candidatCandidatures
  );
  const { Loading, candidatures, error } = candidatCandidatures;
  const candidatureCancel = useSelector((state) => state.candidatureCancel);
  const {
    Loading: LoadingCancel,
    successCancel,
    errorCancel,
  } = candidatureCancel;
  useEffect(() => {
    if (userInfo) {
      dispatch(getMyCandidatures());
    } else {
      history.push('/signin');
    }
  }, [dispatch, history, successCancel, userInfo]);
  const deleteOfferHandler = (id) => {
    if (window.confirm('are you sure')) {
      dispatch(annulerCandidature(id));
    }
  };

  return (
    <>
      <h2 className='my-2 py-2'>Candidatures List</h2>
      {Loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : candidatures.length === 0 ? (
        <Row>
          <Col md={6} className='my-2'>
            <Message>Oups,vous n avez pas de candidatures.</Message>
          </Col>
        </Row>
      ) : (
        <Table striped bordered hover className='sm' responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>OFFRE</th>
              <th>ETAT</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {candidatures.map((candidature, index) => (
              <tr key={candidature.code}>
                <td>{index + 1}</td>
                <td>
                  {candidature.postedAt.slice(0, 10)}
                  {candidature.postedAt.slice(11, 19)}
                </td>
                <td>{candidature.theOffer.title}</td>
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
                  {/* <LinkContainer to={`/admin/user/${offre.id}/edit`}>
                      <Button
                        variant='light'
                        className='btn-sm'
                        style={{ marginLeft: '5px' }}
                      >
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer> */}

                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteOfferHandler(candidature.code)}
                    // style={{ marginTop: '5px' }}
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default CandidaturesUserScreen;
