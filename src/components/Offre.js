import React from 'react';
import { Col, Row, Card, ListGroup, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import gc from '../images/gc.jpg';
import { Redirect, Route } from 'react-router-dom';
import './Offre.css';

const Offre = ({ offre, history }) => {
  return (
    <Card className='my-3 rounded mx-sm-auto text-center card'>
      <Card.Img src={gc} variant='top' className='img' />
      <Card.Body>
        <Card.Title as='h4' className='titleOffer'>
          {offre.title}
        </Card.Title>
        <Card.Text>{offre.description}</Card.Text>
        <Route
          render={({ history }) => (
            <Button
              className='btn-apply'
              onClick={() => {
                history.push(`/offers/${offre.id}`);
              }}
              history={history}
            >
              Lire Plus
            </Button>
          )}
        />
      </Card.Body>
    </Card>
  );
};

export default Offre;
