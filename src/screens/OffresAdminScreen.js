import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Row, Col, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { getOffres, deleteOffer } from '../actions/offresActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

const OffresAdminScreen = ({ history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const listOffres = useSelector((state) => state.listOffres);
  const { Loading, offres, error } = listOffres;
  const offreDelete = useSelector((state) => state.offreDelete);
  const { Loading: LoadingDelete, successDelete, errorDelete } = offreDelete;
  useEffect(() => {
    if (userInfo && userInfo.user.role === 'ADMIN') {
      dispatch(getOffres());
    } else {
      history.push('/signin');
    }
  }, [dispatch, history, successDelete, userInfo]);
  const deleteOfferHandler = (id) => {
    if (window.confirm('are you sure')) {
      dispatch(deleteOffer(id));
    }
  };
  return (
    <>
      <h2 className='my-2 py-2'>Offers List</h2>
      {Loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover className='sm' responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>DESCRIPTION</th>
              <th>STATUS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {offres.map((offre) => (
              <tr key={offre.id}>
                <td>{offre.id}</td>
                <td>{offre.title}</td>
                <td>{offre.description}</td>
                <td>
                  {offre.status === 'VALIDE' ? (
                    <i className='fas fa-check' style={{ color: 'green' }}></i>
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/admin/user/${offre.id}/edit`}>
                    <Button variant='light' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer>

                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteOfferHandler(offre.id)}
                    style={{ marginLeft: '5px' }}
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

export default OffresAdminScreen;
