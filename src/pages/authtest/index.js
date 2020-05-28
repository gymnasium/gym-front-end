import React, { useEffect, useState } from 'react';
import {
  configure,
  fetchAuthenticatedUser,
  getAuthenticatedHttpClient
} from '@edx/frontend-platform/auth';
import { getConfig } from '@edx/frontend-platform';
// import { getLoggingService } from '@edx/frontend-platform/logging';

const config = getConfig();
const {
  BASE_URL,
  LMS_BASE_URL,
  LOGIN_URL,
  LOGOUT_URL,
  REFRESH_ACCESS_TOKEN_ENDPOINT,
  ACCESS_TOKEN_COOKIE_NAME,
  CSRF_TOKEN_API_PATH,
} = config;
console.log('config is');
console.log(config);

configure({
  // loggingService: getLoggingService(),
  appBaseUrl: 'http://edx.devstack.lms:18000/',
  lmsBaseUrl: LMS_BASE_URL,
  loginUrl: LOGIN_URL,
  logoutUrl: LOGOUT_URL,
  refreshAccessTokenEndpoint: REFRESH_ACCESS_TOKEN_ENDPOINT,
  accessTokenCookieName: ACCESS_TOKEN_COOKIE_NAME,
  csrfTokenApiPath: CSRF_TOKEN_API_PATH,
});

const AuthPage = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState(async () => await fetchAuthenticatedUser()); // validates and decodes JWT token
  const [authenticatedHttpClient, setAuthenticatedHttpClient] = useState(() => getAuthenticatedHttpClient());
  const [currentUser, setCurrentUser] = useState();

  const getAuthenticatedUser = async () => {
    const response = await authenticatedHttpClient.get(`http://edx.devstack.lms:18000/api/user/data/${authenticatedUser.username}`); // fetching from an authenticated API using user data
    setCurrentUser(response);
  };

  useEffect(()=>{    
    getAuthenticatedUser();
  },[setCurrentUser]);
  return (
    <>
      <h1>Auth page!</h1>
      <h2>Current user is {currentUser ? currentUser.displayName : 'loading'}</h2>
    </>
  );
};

export default AuthPage;
