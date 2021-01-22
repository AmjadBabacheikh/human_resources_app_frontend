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
  // const { user } = userInfo;
  // const { authorities } = user;
  // console.log(userInfo.user.authorities[0].authority);
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
              {userInfo && userInfo.user.role === 'RECRUTEUR' ? (
                <NavDropdown title='Recruteur' id='Rectruteur'>
                  <LinkContainer to='/recruteur/candidatures'>
                    <NavDropdown.Item>candidatures</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/recruteur/offres'>
                    <NavDropdown.Item>offres</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              ) : null}
              {userInfo && userInfo.user.role === 'ADMIN' ? (
                <NavDropdown title='Admin' id='Admin'>
                  <LinkContainer to='/admin/userslist'>
                    <NavDropdown.Item>users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/offreslist'>
                    <NavDropdown.Item>offres</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              ) : null}
              {userInfo ? (
                <NavDropdown
                  title={`${userInfo.user.firstName.toUpperCase()} ${userInfo.user.lastName.toUpperCase()}`}
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
