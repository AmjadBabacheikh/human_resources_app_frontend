import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footerContainer'>
      <Container>
        <Row>
          <Col md={12} lg={4}>
            <Row>
              <h1 className='px-2'>DonaSid</h1>
            </Row>
            <Row>
              <p className='py-4 px-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, nemo quod magni eaque dicta quo debitis doloremque
                molestiae enim est
              </p>
            </Row>
          </Col>
          <Col md={12} lg={4}>
            <ul>
              <li className='py-0.5'>
                <h5> Adresse</h5>
                <p>23 AL FARAH,20070</p>
                <p>CASABLANCA-MAROC</p>
              </li>
              <li className='py-0.5'>
                <h5>Email</h5>
                <p>contact@donasid.com</p>
              </li>
              <li className='py-0.5'>
                <h5>Service clientele</h5>
                <p>+212689432312 /+3376490293</p>
              </li>
            </ul>
          </Col>
          <Col md={12} lg={4}>
            <h4>Plan du site</h4>
            <ul>
              <li className='py-2'>
                <Link to='/'>Home</Link>
              </li>
              <li className='py-2'>
                <Link to='/offres'>Offres</Link>
              </li>
              <li className='py-2'>
                <Link to='/about'>A propos</Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-2 my-1'>
            &copy; Copyright 2020 DonaSid - All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
