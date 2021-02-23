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
import OffreDetailScreen from './screens/OffreDetailScreen';
import CandidaturesUserScreen from './screens/CandidaturesUserScreen';
import UpdateProfileUserScreen from './screens/UpdateProfileUserScreen';
import CandidaturesOfferScreen from './screens/CandidaturesOfferScreen';
import CandidatureDetailScreen from './screens/CandidatureDetailScreen';
import LogsAdminScreen from './screens/LogsAdminScreen';
const App = () => {
  return (
    <Router>
      <Header />
      <main className='main-dark'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/offres' component={OffresScreen} exact />
          <Route path='/offers/:id' component={OffreDetailScreen} exact />
          <Route path='/signin' component={SignInScreen} exact />
          <Route path='/register' component={SignUpScreen} exact />
          <Route path='/about' component={AboutScreen} exact />
          <Route path='/profile' component={ProfileUserScreen} exact />
          <Route
            path='/editProfile'
            component={UpdateProfileUserScreen}
            exact
          />
          <Route path='/admin/userslist' component={UsersListScreen} exact />
          <Route path='/admin/offreslist' component={OffresAdminScreen} exact />
          <Route path='/admin/logs' component={LogsAdminScreen} exact />
          <Route
            path='/candidatures'
            component={CandidaturesUserScreen}
            exact
          />
          <Route
            path='/offer/:offerId/candidatures/:candidatureId'
            component={CandidatureDetailScreen}
            exact
          />
          <Route
            path='/candidatures/offer/:id'
            component={CandidaturesOfferScreen}
            exact
          />
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
