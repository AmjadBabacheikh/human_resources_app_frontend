import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Row, Col, Button, ListGroup } from 'react-bootstrap';
import { createOffre } from '../actions/offresActions';
import { OFFRE_CREATE_RESET } from '../contants/offresContants';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';

const OffreCreateScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [domaine, setDomaine] = useState('');
  const [description, setDescription] = useState('');
  const [motCle, setMotCle] = useState('');
  const [arrayMotsCles, setArrayMotsCles] = useState([]);
  const [arrayQuestions, setArrayQuestions] = useState([
    'Lien de votre profil Linkedin ?',
    'Corps de votre candidature',
  ]);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const offreCreate = useSelector((state) => state.offreCreate);
  const { Loading, success, error } = offreCreate;
  useEffect(() => {
    if (userInfo && userInfo.user.role === 'RECRUTEUR') {
      if (success) {
        dispatch({ type: OFFRE_CREATE_RESET });
        history.push('/recruteur/offres');
      }
    } else {
      history.push('/signin');
    }
  }, [dispatch, userInfo, success]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const offre = {
      title,
      domaine,
      description,
      kWs: arrayMotsCles,
      questions: arrayQuestions,
    };
    dispatch(createOffre(offre));
  };
  return (
    <FormContainer>
      {Loading && <Loader />}
      {error && <Message variant='danger'>{error}</Message>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='title'>
          <Form.Label>Titre</Form.Label>
          <Form.Control
            type='text'
            placeholder='entrer le titre de l offre'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId='domaine'>
          <Form.Label>Domaine</Form.Label>
          <Form.Control
            as='select'
            defaultValue='Choose...'
            onChange={(e) => setDomaine(e.target.value)}
          >
            <option value='Industrielle '>Industrielle </option>
            <option value='Electrique '>Electrique</option>
            <option value='Mecanique '>Mecanique</option>
            <option value='Financier '>Financier</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='description'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as='textarea'
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Row>
          <Col xs={10} md={10} lg={11}>
            <Form.Group controlId='motCle'>
              <Form.Label>Competences Exigees</Form.Label>
              <Form.Control
                type='text'
                placeholder='entrer les competences exigees'
                value={motCle}
                onChange={(e) => {
                  setMotCle(e.target.value);
                }}
              />
            </Form.Group>
          </Col>
          <Col
            xs={2}
            md={2}
            lg={1}
            style={{ paddingRight: '0px', paddingLeft: ' 0px' }}
          >
            <Button
              variant='primary'
              className='btn-sm'
              onClick={() => {
                setArrayMotsCles((cles) => [...cles, motCle]);
                setMotCle('');
              }}
              style={{ marginTop: '2rem', height: '2.2rem', width: '2.3rem' }}
            >
              <i className='fas fa-plus'></i>
            </Button>
          </Col>
        </Row>
        {arrayMotsCles.length > 0 ? (
          <div>
            <h5>skills choisis</h5>
            <ListGroup>
              {arrayMotsCles.map((mot, index) => (
                <ListGroup.Item key={index}>
                  <Row>
                    <Col xs={10} md={10} lg={10}>
                      {mot}
                    </Col>
                    <Col xs={2} md={2} lg={2}>
                      <Button
                        variant='danger'
                        className='btn-sm'
                        onClick={() => {
                          const newArrayMotsCles = arrayMotsCles.filter(
                            (m, motIndex) => index !== motIndex
                          );
                          setArrayMotsCles([...newArrayMotsCles]);
                        }}
                      >
                        <i className='far fa-trash-alt'></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        ) : (
          <p>Aucun mot cle choisi</p>
        )}
        {/* <Row>
          <Col xs={10} md={10} lg={11}>
            <Form.Group controlId='question'>
              <Form.Label style={{ marginTop: '10px' }}>
                Questions d offre
              </Form.Label>
              <Form.Control
                type='text'
                placeholder='entrer les questions de l offre'
                value={question}
                onChange={(e) => {
                  setQuestion(e.target.value);
                }}
              />
            </Form.Group>
          </Col>
          <Col
            xs={2}
            md={2}
            lg={1}
            style={{ paddingRight: '0px', paddingLeft: ' 0px' }}
          >
            <Button
              variant='primary'
              className='btn-sm'
              onClick={() => {
                setArrayQuestions((questions) => [...questions, question]);
                setQuestion('');
              }}
              style={{ marginTop: '2.7rem', height: '2.2rem', width: '2.3rem' }}
            >
              <i className='fas fa-plus'></i>
            </Button>
          </Col>
        </Row> */}
        {/* {arrayQuestions.length > 0 ? (
          <div>
            <h5>Questions choisis</h5>
            <ListGroup>
              {arrayQuestions.map((quest, index) => (
                <ListGroup.Item key={index}>
                  <Row>
                    <Col xs={10} md={10} lg={10}>
                      {quest}
                    </Col>
                    <Col xs={2} md={2} lg={2}>
                      <Button
                        variant='danger'
                        className='btn-sm'
                        onClick={() => {
                          const newArrayQuestions = arrayQuestions.filter(
                            (m, questionIndex) => index !== questionIndex
                          );
                          setArrayQuestions([...newArrayQuestions]);
                        }}
                      >
                        <i className='far fa-trash-alt'></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        ) : (
          <p>Aucun mot cle choisi</p>
        )} */}
        <div>
          <Button variant='primary' type='submit' className=' my-3 px-4' block>
            Creer offre
          </Button>
        </div>
      </Form>
    </FormContainer>
  );
};

export default OffreCreateScreen;
