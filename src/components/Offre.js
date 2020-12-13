import React from 'react';
import { Col, Row, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import java from '../images/java.jpg';

const Offre = ({ offre }) => {
  return (
    <Card
      style={{ width: '17rem', height: '29.4rem' }}
      className='my-2 px-1 rounded mx-sm-auto'
    >
      <Card.Img
        src={java}
        variant='top'
        style={{ height: '180px', width: '16.5rem' }}
      />
      <Card.Body>
        <Card.Title
          as='h4'
          style={{
            fontSize: '18px',
            color: '#121212',
            height: '3rem',
          }}
        >
          {offre.title}
        </Card.Title>
        <ListGroup variant='flush'>
          {offre.kWs.map((skill, index) => (
            <ListGroup.Item key={index}>{skill}</ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Offre;
