import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, ListGroup, Image } from 'react-bootstrap';
import { getOffres } from '../actions/offresActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Offre from '../components/Offre';
import gc from '../images/gc.jpg';

const OffresScreen = ({ history }) => {
  const dispatch = useDispatch();
  const listOffres = useSelector((state) => state.listOffres);
  const { Loading, offres, error } = listOffres;
  useEffect(() => {
    dispatch(getOffres());
  }, [dispatch]);
  return (
    <>
      {Loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          <Col>
            {offres.map((offre) => (
              <Col xs={12} md={12} lg={9} xl={8} key={offre.id}>
                <Offre offre={offre} />
              </Col>
            ))}
          </Col>
          <Col xs={12} md={12} lg={3} xl={4}>
            <h3 style={{ marginTop: '10px', marginLeft: '15px' }}>
              OFFRES RÉCENTES
            </h3>
            <ListGroup variant='flush'>
              {offres.map((offre) => (
                <ListGroup.Item
                  key={offre.id}
                  onClick={() => {
                    history.push(`/offers/${offre.id}`);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <Row>
                    <Col md={2} lg={6} xl={3}>
                      <Image src={gc} style={{ width: '5rem' }} />
                    </Col>
                    <Col md={10} lg={6} xl={9}>
                      <h6>{offre.title}</h6>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
};

export default OffresScreen;
