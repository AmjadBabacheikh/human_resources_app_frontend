import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Row, Col, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { getOffresRecruteur } from '../actions/offresActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

const OffresRecruteurScreen = ({ history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const listOffresRecruteur = useSelector((state) => state.listOffresRecruteur);
  const { Loading, offres, error } = listOffresRecruteur;
  useEffect(() => {
    if (userInfo && userInfo.user.role === 'RECRUTEUR') {
      dispatch(getOffresRecruteur());
    } else {
      history.push('/signin');
    }
  }, [dispatch, history, userInfo]);

  return (
    <>
      <h2 className='my-2 py-2'>Your Offers List</h2>
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
                  {/* <LinkContainer to={`/admin/recruteur/${offre.id}/edit`}>
                    <Button
                      variant='light'
                      className='btn-sm'
                      style={{ marginLeft: '5px' }}
                    >
                      <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer> */}
                  <Button
                    variant='primary'
                    className='btn-sm'
                    onClick={() => {
                      console.log('hello');
                    }}
                    style={{ marginTop: '5px' }}
                  >
                    <i class='far fa-times-circle'></i>
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

export default OffresRecruteurScreen;
