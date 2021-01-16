import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Row, Col, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { getUsers } from '../actions/userActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

const UsersListScreen = () => {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.usersList);
  const { Loading, users, error } = usersList;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  //   const userDelete = useSelector((state) => state.userDelete);
  //   const { Loading: LoadingDelete, successDelete, errorDelete } = userDelete;
  useEffect(() => {
    if (userInfo && userInfo.user.role === 'ADMIN') {
      dispatch(getUsers());
    } else {
      history.push('/signin');
    }
  }, [dispatch, history, userInfo]);
  const deleteUserHandler = (id) => {
    if (window.confirm('are you sure')) {
      //   dispatch(deleteUser(id));
    }
  };
  return (
    <>
      <h2 className='my-2'>Users</h2>
      {Loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover className='sm' responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th> Name</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{`${user.firstName} ${user.lastName}`}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === 'ADMIN' ? (
                    <i className='fas fa-check' style={{ color: 'green' }}></i>
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/admin/user/${user.id}/edit`}>
                    <Button variant='light' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteUserHandler(user.id)}
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

export default UsersListScreen;
