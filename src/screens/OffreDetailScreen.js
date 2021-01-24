import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Col,
  Row,
  ListGroup,
  Button,
  Image,
  Container,
  Card,
  Form,
} from 'react-bootstrap';
import { getOffreDetail } from '../actions/offresActions';
import { LinkContainer } from 'react-router-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import gc from '../images/gc.jpg';

const OffreDetailScreen = ({ match, history }) => {
  const offerId = match.params.id;
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const detailOffre = useSelector((state) => state.detailOffre);
  const { Loading, offre, error } = detailOffre;
  const isEmpty = function (obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };
  useEffect(() => {
    if (isEmpty(offre) || offre.id !== offerId) {
      dispatch(getOffreDetail(offerId));
    }
  }, [dispatch, offerId]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInfo) {
      history.push(`/offre/postuler/${offre.id}`);
    } else {
      history.push(`/signin`);
    }
  };
  return (
    <Container>
      <LinkContainer to='/offres'>
        <Button variant='secondary' className='my-3'>
          Retour
        </Button>
      </LinkContainer>
      {Loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <>
          <Row>
            <Col md={3} xs={12}>
              <Image alt={offre.title} src={gc} thumbnail fluid />
            </Col>
            <Col md={8} xs={12}>
              <Row>
                <h3 style={{ color: '#121212' }}>
                  {offre.title} – Recrutement
                </h3>
              </Row>
              <Row>
                <div style={{ color: '#666' }}>
                  Date : {offre.createdAt.slice(0, 10)}
                </div>
              </Row>
              <Row className='my-2'>
                <h6>secteur {offre.domaine}</h6>
              </Row>
              <Row className='my-2'>
                <div style={{ color: '#666' }}>{offre.description}</div>
              </Row>
              <Row>
                {!isEmpty(offre) && offre.kWs.length > 0 ? (
                  <>
                    <h4>Les connaissances exigées pour le poste</h4>
                    <ul style={{ color: '#666' }}>
                      {offre.KWs.map((word, index) => (
                        <li key={index}>{word}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p>Pas Connaissances exigées pour cette offre</p>
                )}
              </Row>
              <Row>
                <Col className='px-0'>
                  <h4>Notre environnement</h4>
                  <ul style={{ color: '#666' }}>
                    <li>- Evolution dans un contexte à projets multiples</li>
                    <li>
                      - Organisation du travail et suivi des tâches en mode
                      tracker
                    </li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Form onSubmit={handleSubmit}>
                  <Button
                    variant='primary'
                    type='submit'
                    className='my-2 btn-sm'
                  >
                    POSTULER
                  </Button>
                </Form>
              </Row>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default OffreDetailScreen;
