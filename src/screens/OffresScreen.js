import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { getOffres } from '../actions/offresActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Offre from '../components/Offre';

const OffresScreen = () => {
  const dispatch = useDispatch();
  const listOffres = useSelector((state) => state.listOffres);
  const { Loading, offres, error } = listOffres;
  useEffect(() => {
    dispatch(getOffres());
  }, [dispatch]);
  return (
    <>
      <Container className='my-4'>
        {Loading ? (
          <Loader />
        ) : (
          <>
            <Row>
              <Col>
                {offres.map((offre) => (
                  <Col xs={12} md={12} lg={9} xl={8} key={offre.id}>
                    <Offre offre={offre} />
                  </Col>
                ))}
              </Col>
              <Col xs={12} md={12} lg={3} xl={4}>
                <h3 style={{ marginTop: '10px', marginLeft: '10px' }}>
                  OFFRES RÉCENTES
                </h3>
                <ListGroup variant='flush'>
                  {offres.map((offre) => (
                    <ListGroup.Item key={offre.id}>
                      {offre.title}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default OffresScreen;
