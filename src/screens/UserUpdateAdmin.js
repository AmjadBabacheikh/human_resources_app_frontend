import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Row, Button } from 'react-bootstrap';
import { getUser, changeRoleUser } from '../actions/userActions';
import {
  USER_INFO_RESET,
  USER_CHANGE_ROLE_RESET,
} from '../contants/userConstants';
import Message from '../components/Loader';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';

const UserUpdateAdmin = ({ match, history }) => {
  const userId = match.params.id;
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(' ');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isRecruiter, setIsRecruiter] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userInfos = useSelector((state) => state.userInfos);
  const { Loading, user, error } = userInfos;
  const userChangeRole = useSelector((state) => state.userChangeRole);
  const { Loading: LoadingChange, successChange, errorChange } = userChangeRole;

  const isEmpty = function (obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };

  useEffect(() => {
    if (userInfo && userInfo.user.role === 'ADMIN') {
      if (successChange) {
        dispatch({ type: USER_INFO_RESET });
        dispatch({ type: USER_CHANGE_ROLE_RESET });
        history.push('/admin/userslist');
      } else {
        if (isEmpty(user) || user.id != userId) {
          dispatch(getUser(userId));
        } else {
          setFirstName(user.firstName);
          setLastName(user.lastName);
          setEmail(user.email);
          if (user.role === 'ADMIN') {
            setIsAdmin(true);
          }
          if (user.role === 'RECRUTEUR') {
            setIsRecruiter(true);
          }
        }
      }
    } else {
      history.push('/signin');
    }
  }, [dispatch, userInfo, userId, user, successChange, history]);

  const handleEdit = (e) => {
    e.preventDefault();
    var role = isAdmin ? 'ADMIN' : isRecruiter ? 'RECRUTEUR' : user.role;
    dispatch(changeRoleUser(userId, role));
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FormContainer>
        <h1 className='py-2 text-center'>Editer User</h1>
        {Loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : null}
        <Form onSubmit={handleEdit}>
          <Form.Group controlId='firstName'>
            <Form.Label>first Name </Form.Label>
            <Form.Control
              type='text'
              value={firstName || ' '}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='lastName'>
            <Form.Label>last Name </Form.Label>
            <Form.Control
              type='text'
              value={lastName || ' '}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Label>User email</Form.Label>
            <Form.Control
              type='email'
              value={email || ' '}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <div>
            <Form.Check
              inline
              label='isAdmin'
              type='checkbox'
              onChange={(e) => {
                setIsAdmin(e.target.checked);
              }}
              checked={isAdmin}
            />
          </div>
          <div>
            <Form.Check
              inline
              label='isRecruiter'
              type='checkbox'
              onChange={(e) => {
                setIsRecruiter(e.target.checked);
              }}
              checked={isRecruiter}
            />
          </div>
          <Button className='my-3 px-4' type='submit'>
            Edit
          </Button>
        </Form>
      </FormContainer>
    </div>
  );
};

export default UserUpdateAdmin;
