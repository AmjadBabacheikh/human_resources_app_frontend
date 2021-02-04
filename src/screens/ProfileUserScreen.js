import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Col, Row, Button, ListGroup } from 'react-bootstrap';
import { getMyProfile, getMyImage } from '../actions/userActions';
import { LinkContainer } from 'react-router-bootstrap';
import Message from '../components/Loader';
import Loader from '../components/Loader';
import './ProfileUserScreen.css';

const ProfileUserScreen = ({ history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userProfile = useSelector((state) => state.userProfile);
  const { Loading: LoadingProfile, user, error: errorProfile } = userProfile;
  const userImage = useSelector((state) => state.userImage);
  const { Loading: LoadingImage, image, error: errorImage } = userImage;
  const isEmpty = function (obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };
  useEffect(() => {
    if (isEmpty(user)) {
      dispatch(getMyProfile());
      dispatch(getMyImage());
    }
  }, [dispatch, history]);
  return (
    <>
      <LinkContainer to='/' style={{ float: 'right' }}>
        <Button variant='secondary' className='my-3'>
          Edit Profile
        </Button>
      </LinkContainer>
      {LoadingProfile ? (
        <Loader />
      ) : (
        <Row>
          <Col md={3} xs={12} className='my-3'>
            <img
              alt={user.firstName}
              style={{ width: '80%', height: '100%' }}
              src={image}
            />
          </Col>
          <Col md={9} xs={12} className='my-3'>
            <h4 style={{ marginBottom: '20px', color: '#333' }}>
              {!isEmpty(user) ? user.lastName.toUpperCase() : null}
              <span> </span>
              {!isEmpty(user) ? user.firstName.toUpperCase() : null}
            </h4>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>CIN</Col>
                  <Col className='info'>
                    <strong>{user.cin}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Name</Col>
                  <Col className='info'>
                    <strong>
                      {user.lastName} {user.firstName}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Email</Col>
                  <Col className='info'>
                    <strong>{user.email}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Phone</Col>
                  <Col className='info'>
                    <strong>{user.phoneNumber}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Adresse</Col>
                  <Col className='info'>
                    <strong>{user.adress}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Role</Col>
                  <Col className='info'>
                    <strong>{user.role}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProfileUserScreen;
