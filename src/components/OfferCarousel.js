import React, { useState, useEffect } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from './Message';
import Loader from './Loader';
import { getLatestOffres } from '../actions/offresActions';
import { Link } from 'react-router-dom';
import axios from 'axios';
import gc from '../images/gc.jpg';

const OfferCarousel = () => {
  const dispatch = useDispatch();
  const latestOffresList = useSelector((state) => state.latestOffresList);
  const { Loading, offres, error } = latestOffresList;
  useEffect(() => {
    dispatch(getLatestOffres());
  }, [dispatch]);

  return Loading ? (
    <Loader />
  ) : error ? (
    <Message varaint='danger'>{error}</Message>
  ) : (
    <>
      <Carousel pause='hover' className='bg-primary my-2'>
        {offres.map((offre) => (
          <Carousel.Item key={offre.id} pause='hover' className='bg-secondary'>
            <Link to={`/offers/${offre.id}`}>
              <Image
                src={gc}
                alt={offre.title}
                fluid
                style={{ width: '40rem' }}
              />
              <Carousel.Caption className='carousel-caption'>
                <h2>
                  {offre.title}
                  {/* <span className='px-1'>{book.price}€</span> */}
                </h2>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default OfferCarousel;
