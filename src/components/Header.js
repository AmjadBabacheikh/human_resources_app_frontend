import React from 'react';
import { Navbar, Button, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <header>
      <Navbar className='nav-color' expand='lg'>
        <Container>
          <LinkContainer to='/' style={{ color: '#fafafa', fontSize: '25px' }}>
            <Navbar.Brand>DonaSid</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse>
            <Nav className='ml-auto'>
              <LinkContainer to='/'>
                <Nav.Link className='nav-link'>Acceuil</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/offres'>
                <Nav.Link className='nav-link'>Offres</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/About'>
                <Nav.Link className='nav-link'>À propos</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/signup'>
                <Nav.Link className='nav-link'>Connexion</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
