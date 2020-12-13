import React from 'react';
import { Col, Row, ListGroup } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footerContainer'>
      <Row>
        <Col className='text-center' md={12} lg={4}>
          <i className='fas fa-shopping-cart'></i>
        </Col>
        <Col className='text-center' md={12} lg={4}>
          Home
        </Col>
        <Col className='text-center' md={12} lg={4}>
          lorem
        </Col>
      </Row>
      <Row>
        <Col className='text-center py-2 my-1'>
          &copy; Copyright 2020 DonaSid - All rights reserved.
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
