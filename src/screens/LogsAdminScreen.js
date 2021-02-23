import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Row, Col, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { getLogs } from '../actions/userActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

const LogsAdminScreen = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logsList = useSelector((state) => state.logsList);
  const { Loading, logs, error } = logsList;
  useEffect(() => {
    if (userInfo && userInfo.user.role === 'ADMIN') {
      dispatch(getLogs());
    } else {
      history.push('/signin');
    }
  }, [dispatch, history, userInfo]);
  return (
    <>
      <h2 className='my-2 py-2'>Logs List</h2>
      {Loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover className='sm' responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th> DATE</th>
              <th>USER</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id}>
                <td>{log.id}</td>
                <td>{log.date.slice(0, 10)}</td>
                <td>
                  {log.user && log.user.firstName}
                  <span> </span>
                  {log.user && log.user.lastName}
                </td>
                <td>{log.action}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default LogsAdminScreen;
