import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import OffresScreen from './screens/OffresScreen';
import Footer from './components/Footer';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import './App.css';

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
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
