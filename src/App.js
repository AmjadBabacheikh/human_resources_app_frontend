import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import OffresScreen from './screens/OffresScreen';
import Footer from './components/Footer';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import AboutScreen from './screens/AboutScreen';
import './App.css';
import UsersListScreen from './screens/UsersListScreen';
import OffresAdminScreen from './screens/OffresAdminScreen';
import UserUpdateAdmin from './screens/UserUpdateAdmin';
import ProfileUserScreen from './screens/ProfileUserScreen';
import OffresRecruteurScreen from './screens/OffresRecruteurScreen';
import OffreCreateScreen from './screens/OffreCreateScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/offres' component={OffresScreen} exact />
          <Route path='/signin' component={SignInScreen} exact />
          <Route path='/register' component={SignUpScreen} exact />
          <Route path='/about' component={AboutScreen} exact />
          <Route path='/profile' component={ProfileUserScreen} exact />
          <Route path='/admin/userslist' component={UsersListScreen} exact />
          <Route path='/admin/offreslist' component={OffresAdminScreen} exact />
          <Route
            path='/recruteur/offres'
            component={OffresRecruteurScreen}
            exact
          />
          <Route
            path='/recruteur/offer/create'
            component={OffreCreateScreen}
            exact
          />
          <Route
            path='/admin/user/:id/edit'
            component={UserUpdateAdmin}
            exact
          />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
