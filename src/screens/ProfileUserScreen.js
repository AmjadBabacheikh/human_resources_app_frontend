import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { updateProfile } from '../actions/userActions';
import Message from '../components/Loader';
import Loader from '../components/Loader';

const ProfileUserScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const profileUpdate = useSelector((state) => state.profileUpdate);
  const { Loading, success, error } = profileUpdate;
  useEffect(() => {
    if (userInfo) {
      setFirstName(userInfo.user.firstName);
      setLastName(userInfo.user.lastName);
      setEmail(userInfo.user.email);
    } else {
      history.push('/');
    }
  }, [userInfo, history]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('passwords does not match');
    } else {
      dispatch(
        updateProfile({
          firstName,
          lastName,
          email,
          password,
        })
      );
      setPassword('');
      setConfirmPassword('');
    }
  };
  return (
    <Row>
      <Col md={3} className='py-3'>
        <h2>User Profile</h2>
        {success && (
          <Message variant='success'>profile updated successfully</Message>
        )}
        {Loading && <Loader />}
        {error && <Message variant='danger'>{error}</Message>}
        {message && <Message variant='danger'>{message}</Message>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='firstName'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId='lastName'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId='confirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Update
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default ProfileUserScreen;
