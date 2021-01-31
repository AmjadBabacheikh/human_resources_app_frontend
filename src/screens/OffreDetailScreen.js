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
import { postuler } from '../actions/candidaturesActions';
import { LinkContainer } from 'react-router-bootstrap';
import { POSTULER_OFFRE_RESET } from '../contants/candidaturesConstants';
import Loader from '../components/Loader';
import Message from '../components/Message';
import gc from '../images/gc.jpg';

const OffreDetailScreen = ({ match, history }) => {
  const offerId = match.params.id;
  const dispatch = useDispatch();
  const [linkden, setLinkden] = useState('');
  const [motivation, setMotivation] = useState('');
  const [message, setMessage] = useState(null);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const detailOffre = useSelector((state) => state.detailOffre);
  const { Loading, offre, error } = detailOffre;
  const offrePostuler = useSelector((state) => state.offrePostuler);
  const {
    Loading: LoadingPostuler,
    successPostuler,
    errorPostuler,
  } = offrePostuler;
  const isEmpty = function (obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };
  useEffect(() => {
    if (successPostuler) {
      dispatch({ type: POSTULER_OFFRE_RESET });
      history.push('/candidatures');
    } else if (isEmpty(offre) || offre.id !== offerId) {
      dispatch(getOffreDetail(offerId));
    }
  }, [dispatch, offerId, successPostuler]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInfo) {
      if (linkden !== '' && motivation !== '') {
        dispatch(postuler(offre.id, { answers: [linkden], motivation }));
      } else {
        setMessage('Veuillez bien remplir le formulaire');
      }
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
                  Date : {!isEmpty(offre) ? offre.createdAt.slice(0, 10) : null}
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
                  <Col className='px-0'>
                    <h4>Les connaissances exigées pour le poste</h4>
                    <ul style={{ color: '#666' }}>
                      {offre.kWs.map((word, index) => (
                        <li key={index}> - {word}</li>
                      ))}
                    </ul>
                  </Col>
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
                <Container>
                  <Row className='justify-content-md'>
                    <Col xs={12} md={8} className='px-0'>
                      <Form onSubmit={handleSubmit}>
                        <h4>Postuler sur : </h4>
                        {message && (
                          <Message variant='danger'>{message}</Message>
                        )}
                        {LoadingPostuler && <Loader />}
                        {errorPostuler && (
                          <Message variant='danger'>{errorPostuler}</Message>
                        )}
                        <Form.Group controlId='linkden'>
                          <Form.Label>Lien de votre profil Linkedin</Form.Label>
                          <Form.Control
                            type='text'
                            placeholder=''
                            value={linkden}
                            onChange={(e) => {
                              setLinkden(e.target.value);
                            }}
                          />
                        </Form.Group>
                        <Form.Group controlId='motivation'>
                          <Form.Label>
                            Corps de votre candidature
                            <span style={{ color: 'red' }}> *</span>
                          </Form.Label>
                          <Form.Control
                            as='textarea'
                            rows={4}
                            required
                            value={motivation}
                            onChange={(e) => setMotivation(e.target.value)}
                          />
                        </Form.Group>
                        <Button
                          variant='primary'
                          type='submit'
                          className='my-2 btn-sm'
                          style={{ float: 'right' }}
                        >
                          Envoyer
                        </Button>
                      </Form>
                    </Col>
                  </Row>
                </Container>
              </Row>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default OffreDetailScreen;
