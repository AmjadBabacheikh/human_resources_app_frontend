import React from 'react';
import { Col, Row, Card, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import gc from '../images/gc.jpg';
import './Offre.css';

const Offre = ({ offre }) => {
  return (
    <Card
      style={{ width: '40rem', height: '33rem' }}
      className='my-3 rounded mx-sm-auto text-center'
    >
      <Card.Img
        src={gc}
        variant='top'
        style={{ height: '20rem', width: '39.9rem' }}
      />
      <Card.Body>
        <Card.Title
          as='h4'
          style={{
            fontSize: '25px',
            color: '#121212',
            height: '3rem',
          }}
        >
          {offre.title}
        </Card.Title>
        <Card.Text>{offre.description}</Card.Text>
        <Button className='btn-apply my-3'>Lire Plus</Button>
      </Card.Body>
    </Card>
  );
};

export default Offre;
