import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from '@reach/router';

import { Layout } from '../../components';

import { logOut } from '../../store/auth';

const LogoutPage = () => {
  const navigate = useNavigate();
  const authState = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const { isLoggedIn, loaded } = authState;

  // log the user out
  useEffect(() => {
    if (loaded && isLoggedIn) {
      dispatch(logOut());
    }
  }, [dispatch, isLoggedIn, loaded]);

  //  then redirect home
  useEffect(() => {
    if (loaded && !isLoggedIn) {
      navigate('/');
    }
  }, [loaded, isLoggedIn, navigate]);

  return (
    <Layout>
      <h1>Logging out...</h1>
      <p>{authState.user.displayName}</p>
    </Layout>
  );
};

export default LogoutPage;
