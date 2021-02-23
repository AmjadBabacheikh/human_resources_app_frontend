import React from 'react';
import { Container, Col, Row, Image, Button } from 'react-bootstrap';
import { Spring } from 'react-spring/renderprops';
import './AboutScreen.css';
import abouttImage from '../circle-cropped.png';
import team1Image from '../Capture1.PNG';
import team2Image from '../person2.PNG';
import team3Image from '../perso1.PNG';
import team4Image from '../person3.PNG';
const AboutScreen = () => {
  return (
    <>
      <Container className='about-section'>
        <Row>
          <Col md={5}>
            <Image className='aboutContainer' src={abouttImage} />
          </Col>
          <Col md='auto' lg={7} xs={12}>
            <h1 className='py-4 '>Qui Sommes Nous ?</h1>
            <br></br>
            <p>
              DONASAID offre un environnement et un cadre de travail
              multiculturel exceptionnels dont la seule ambition est de garantir
              l’employabilité des jeunes diplômés en leur transférant les
              valeurs d’engagement, de respect et de responsabilité.
            </p>
            <div className='text-center py-3'>
              <a href={'#part1'} className='btn btn-info' role='button'>
                Voir Plus
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={12}>
            <h2 className='display-4 my-3 text-center'>NOTRE EQUIPE</h2>
            <br></br>
            <br></br>
          </Col>
        </Row>
        <Row>
          <Col className='md-3 text-center'>
            <Image className='teamImage' src={team1Image} />
            <h5 className='mt-2'>NADIA HALIM</h5>
            <h6 className='mb-2 text-muted'>Directrice</h6>

            <p className='card-text'>
              Grâce à plus de 15 années d’expériences dans de grandes enseignes
              internationales, je vous apporte mon expertise pour trouver vos
              futurs collaborateurs ! Nous vous accompagnons dans vos projets de
              recrutement
            </p>
            <br></br>
            <br></br>
          </Col>
          <Col className='md-3 text-center'>
            <Image className='teamImage' src={team2Image} />
            <h5 className='mt-2'>AMAL CHIFAOUI</h5>
            <h6 className='mb-2 text-muted'>Consultante recrutement</h6>

            <p className='card-text'>
              Avec 9 ans d'expérience en entreprise et 3 ans en cabinet de
              recrutement, elle est votre interlocutrice principale pour les
              recrutements
            </p>
          </Col>
          <Col className='md-3 text-center'>
            <Image className='teamImage' src={team3Image} />
            <h5 className='mt-2'>ADIL CHARIF</h5>
            <h6 className='mb-2 text-muted'>Consultant en recrutement</h6>

            <p className='card-text'>
              Consultant en recrutement Avec plus de 30 ans d'expérience en
              cabinet de recrutement, chasse et management.
            </p>
          </Col>
          <Col className='md-3 text-center'>
            <Image className='teamImage' src={team4Image} />
            <h5 className='mt-2'>SAMIA SAMAOUI</h5>
            <h6 className='mb-2 text-muted'>Marketing et communication</h6>
            <p className='card-text'>
              Samia a rejoint notre équipe en tant que chargée de marketing et
              de communication. Elle est la personne de contact pour les
              entreprises et peut donc répondre à vos questions sur notre
              process
            </p>
          </Col>
        </Row>
      </Container>
      <Container className='about-section2'>
        <Row className='text-white'>
          <Col md={12}>
            <h2 className='text-center display-4 my-3'>Suivez-Nous </h2>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className='my-2 pb-3 text-center'>
              <ul>
                <li>
                  <a href='//twitter.com/'>
                    <i className='fab fa-facebook fa-lg  py-3'></i>
                  </a>
                  <a href='//twitter.com/'>
                    <i className='fab fa-linkedin fa-lg mx-3 py-3'></i>
                  </a>
                  <a href='//twitter.com/'>
                    <i className='fab fa-instagram fa-lg py-3'></i>
                  </a>
                  <a href='//twitter.com/'>
                    <i className='fab fa-twitter fa-lg mx-3 py-3'></i>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutScreen;
