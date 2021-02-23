import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Col, Row, Image, Button } from 'react-bootstrap';
import OfferCarousel from '../components/OfferCarousel';
import { Spring } from 'react-spring/renderprops';
import homeImage from '../homeImage.jpg';
import './HomeScreen.css';

const HomeScreen = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handlePostuler = () => {
    if (userInfo) {
      history.push('/offres');
    } else {
      history.push('/signin');
    }
  };
  return (
    <Container className='homeContent' style={{ minHeight: '40vh' }}>
      <Row>
        <Col md={5} xs={12}>
          <h1
            className='py-5 my-5'
            style={{
              fontFamily: 'Montserrat',
              fontSize: '45px',
              fontWeight: 'bold',
            }}
          >
            Travaillez avec les meilleures équipes d'ingénierie industrielle .
          </h1>
        </Col>
        <Col md={7} lg={5} xs={12}>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {(props) => (
              <Image
                style={props}
                className='homeContainer'
                src={homeImage}
                alt='home image'
              />
            )}
          </Spring>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='text-center py-4'>
            <h4 className='homeh4'>
              Donasid recherche des personnes dynamiques, entreprenantes, de
              futurs collaborateurs et managers qui souhaitent évoluer au sein
              d’une entreprise aux nombreux challenges. En interne, les
              relations de travail se basent sur la transparence, la
              concertation et le travail d’équipe.
            </h4>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='text-center py-3'>
            <Button className='p-3 btn-apply' onClick={handlePostuler}>
              Postuler maintenant
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='py-3'>
            <h3 className='py-2'>Nos recentes offres</h3>
            <OfferCarousel />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
