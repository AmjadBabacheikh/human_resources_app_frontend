import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Button, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import { logout } from '../actions/userActions';
import { LinkContainer } from 'react-router-bootstrap';
import './Header.css';

const Header = ({ history }) => {
  const dispatch = useDispatch();
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
                <NavDropdown
                  title={`${userInfo.user.firstName} ${userInfo.user.lastName}`}
                  id='username'
                >
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>profile</NavDropdown.Item>
                  </LinkContainer>
                  <Route
                    render={({ history }) => (
                      <NavDropdown.Item
                        history={history}
                        onClick={() => {
                          dispatch(logout());
                          history.push('/');
                        }}
                      >
                        logout
                      </NavDropdown.Item>
                    )}
                  />
                </NavDropdown>
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
