import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Button, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Header.css';

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { Loading, error, userInfo } = userLogin;
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
              {userInfo ? (
                <LinkContainer to='/'>
                  <Nav.Link className='nav-link'>
                    {userInfo.user.firstName}
                    {userInfo.user.lastName}
                  </Nav.Link>
                </LinkContainer>
              ) : (
                <LinkContainer to='/signin'>
                  <Nav.Link className='nav-link'>connexion</Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
