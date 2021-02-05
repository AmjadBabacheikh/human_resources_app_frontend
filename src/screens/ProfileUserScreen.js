import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import { useDispatch, useSelector } from 'react-redux';
import { Form, Col, Row, Button, ListGroup } from 'react-bootstrap';
import { getMyProfile, getMyImage, getMyCV } from '../actions/userActions';
import { LinkContainer } from 'react-router-bootstrap';
import { SizeMe } from 'react-sizeme';
import Message from '../components/Loader';
import Loader from '../components/Loader';
import unknown from '../unknown.jpg';
import './ProfileUserScreen.css';
import axios from 'axios';

const ProfileUserScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingCV, setUploadingCV] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userProfile = useSelector((state) => state.userProfile);
  const { Loading: LoadingProfile, user, error: errorProfile } = userProfile;
  const userImage = useSelector((state) => state.userImage);
  const { Loading: LoadingImage, image, error: errorImage } = userImage;
  const userCv = useSelector((state) => state.userCv);
  const { Loading: LoadingCV, cv, error: errorCV } = userCv;
  const isEmpty = function (obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };
  useEffect(() => {
    if (isEmpty(user)) {
      dispatch(getMyProfile());
      dispatch(getMyImage());
      dispatch(getMyCV());
    }
  }, [dispatch, history]);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  const uploadImageHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    setUploadingImage(true);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `${userInfo.jwt}`,
        },
      };
      await axios.post('/api/CANDIDAT/pdp', formData, config);
      setUploadingImage(false);
      dispatch(getMyImage());
    } catch (error) {
      console.error(error);
      setUploadingImage(false);
    }
  };
  const uploadCVHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    setUploadingCV(true);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `${userInfo.jwt}`,
        },
      };
      await axios.post('/api/CANDIDAT/cv', formData, config);
      setUploadingCV(false);
      dispatch(getMyCV());
    } catch (error) {
      console.error(error);
      setUploadingCV(false);
    }
  };
  return (
    <>
      <LinkContainer to='/' style={{ float: 'right' }}>
        <Button variant='secondary' className='my-3'>
          Edit Profile
        </Button>
      </LinkContainer>
      {LoadingProfile ? (
        <Loader />
      ) : (
        <Row>
          <Col md={3} xs={12} className='my-3 profile-img'>
            {image ? (
              <>
                <img
                  alt={user.firstName}
                  style={{ width: '80%', height: cv ? '20%' : '80%' }}
                  src={image}
                />
                <div className='file btn btn-lg btn-primary'>
                  Change Photo
                  <input
                    type='file'
                    name='file'
                    onChange={uploadImageHandler}
                  />
                  {uploadingImage && <Loader />}
                </div>
              </>
            ) : (
              <>
                <img
                  alt={user.firstName}
                  style={{ width: '80%', height: cv ? '20%' : '70%' }}
                  src={unknown}
                />
                <div className='file btn btn-lg btn-primary'>
                  Change Photo
                  <input
                    type='file'
                    name='file'
                    onChange={uploadImageHandler}
                  />
                  {uploadingImage && <Loader />}
                </div>
              </>
            )}
          </Col>
          <Col md={9} xs={12} className='my-3'>
            <h4 style={{ marginBottom: '20px', color: '#333' }}>
              {!isEmpty(user) ? user.lastName.toUpperCase() : null}
              <span> </span>
              {!isEmpty(user) ? user.firstName.toUpperCase() : null}
            </h4>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>CIN</Col>
                  <Col className='info'>
                    <strong>{user.cin}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Name</Col>
                  <Col className='info'>
                    <strong>
                      {user.lastName} {user.firstName}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Email</Col>
                  <Col className='info'>
                    <strong>{user.email}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Phone</Col>
                  <Col className='info'>
                    <strong>{user.phoneNumber}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Adresse</Col>
                  <Col className='info'>
                    <strong>{user.adress}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Role</Col>
                  <Col className='info'>
                    <strong>{user.role}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
            {cv ? (
              <SizeMe
                monitorHeight
                refreshRate={128}
                refreshMode={'debounce'}
                render={({ size }) => (
                  <div className='profile-cv'>
                    <Document file={cv} onLoadSuccess={onDocumentLoadSuccess}>
                      <Page
                        pageNumber={pageNumber}
                        width={size.width}
                        size='A4'
                      />
                    </Document>
                    <div className='file btn btn-lg btn-primary'>
                      Change CV
                      <input type='file' name='cv' onChange={uploadCVHandler} />
                      {uploadingCV && <Loader />}
                    </div>
                  </div>
                )}
              />
            ) : (
              <div className='profile-cv'>
                <div className='file btn btn-lg btn-primary'>
                  Entrer CV
                  <input type='file' name='cv' onChange={uploadCVHandler} />
                </div>
              </div>
            )}
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProfileUserScreen;
