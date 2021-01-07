import React, { useState } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import './SignUpScreen.css';

const SignUpScreen = () => {
  const [CIN, setCin] = useState('');
  const [fisrtName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [adress, setAdress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <FormContainer className='align-middle'>
      <h1 className='py-2 text-center'>Inscription</h1>
      <Form>
        <Row>
          <Col>
            <Form.Group controlId='firstName'>
              <Form.Label>Your first name</Form.Label>
              <Form.Control
                type='firstName'
                placeholder='John'
                value={fisrtName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='lastName'>
              <Form.Label>Your last name</Form.Label>
              <Form.Control
                type='lastName'
                placeholder='Doe'
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId='cin'>
          <Form.Label>Your cin</Form.Label>
          <Form.Control
            type='text'
            placeholder='D4395713'
            value={CIN}
            onChange={(e) => {
              setCin(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Your email</Form.Label>
          <Form.Control
            type='email'
            placeholder='e.g.elon@gmail.com'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Your Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='your password here'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId='comfirmedPassword'>
          <Form.Label>Confirm Your Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='confirm your password here'
            value={confirmedPassword}
            onChange={(e) => {
              setConfirmedPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId='phoneNumber'>
          <Form.Label>Your phone number</Form.Label>
          <Form.Control
            type='text'
            placeholder='+2120643562097'
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId='adress'>
          <Form.Label>Your phone number</Form.Label>
          <Form.Control
            type='text'
            placeholder='542 W. 15th Street'
            value={adress}
            onChange={(e) => {
              setAdress(e.target.value);
            }}
          />
        </Form.Group>
        <div>
          <Button
            variant='primary'
            type='submit'
            className='btnLogin my-3 px-4'
            block
          >
            Inscription
          </Button>
        </div>
      </Form>
      <Row className='py-3'>
        Deja inscrit ?
        <Link
          to='/signin'
          style={{
            textDecoration: 'none',
            paddingLeft: '3px',
            color: '#005691',
          }}
        >
          Connectez-vous
        </Link>
      </Row>
    </FormContainer>
  );
};

export default SignUpScreen;
