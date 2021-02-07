import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { updateProfile, getMyProfile } from '../actions/userActions';
import FormContainer from '../components/FormContainer';
import Message from '../components/Loader';
import Loader from '../components/Loader';

const UpdateProfileUserScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [adress, setAdress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userProfile = useSelector((state) => state.userProfile);
  const { Loading: LoadingProfile, user, error: errorProfile } = userProfile;
  const profileUpdate = useSelector((state) => state.profileUpdate);
  const { success } = profileUpdate;

  const isEmpty = function (obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };
  useEffect(() => {
    if (isEmpty(user)) {
      dispatch(getMyProfile());
    } else {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setAdress(user.adress);
      setPhoneNumber(user.phoneNumber);
    }
  }, [dispatch, user, history]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('passwords does not match');
    } else {
      dispatch(
        updateProfile(firstName, lastName, adress, phoneNumber, password)
      );
      setPassword('');
      setConfirmPassword('');
    }
  };
  return (
    <Row>
      <Col md={6} className='my-3 px-3'>
        <h2>Edit Profile</h2>
        {success && (
          <Message variant='success'>profile updated successfully</Message>
        )}
        {LoadingProfile && <Loader />}
        {errorProfile && <Message variant='danger'>{errorProfile}</Message>}
        {message && <Message variant='danger'>{message}</Message>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='firstName'>
            <Form.Label>Prenom</Form.Label>
            <Form.Control
              type='name'
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId='lastName'>
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type='name'
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId='adress'>
            <Form.Label>Adresse</Form.Label>
            <Form.Control
              type='text'
              value={adress}
              onChange={(e) => {
                setAdress(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId='tel'>
            <Form.Label>Telephone</Form.Label>
            <Form.Control
              type='text'
              value={phoneNumber || ''}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
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

export default UpdateProfileUserScreen;
