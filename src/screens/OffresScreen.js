import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { getOffres } from '../actions/offresActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Offre from '../components/Offre';

const OffresScreen = () => {
  const dispatch = useDispatch();
  const listOffres = useSelector((state) => state.listOffres);
  const { Loading, offres } = listOffres;
  useEffect(() => {
    dispatch(getOffres());
  }, [dispatch]);
  return (
    <Container>
      {Loading ? (
        <Loader />
      ) : (
        <>
          <Row>
            <h2 className='py-3'>Derniers Jobs</h2>
          </Row>
          <Row>
            {offres.map((offre) => (
              <Col xs={12} md={6} lg={4} xl={3} key={offre.id}>
                <Offre offre={offre} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};

export default OffresScreen;
