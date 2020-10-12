import React, { useEffect, useState } from 'react';
import {
  configure,
  fetchAuthenticatedUser,
  getAuthenticatedHttpClient,
} from '@edx/frontend-platform/auth';
import { getConfig } from '@edx/frontend-platform';
import { getLoggingService } from '@edx/frontend-platform/logging';

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
  appBaseUrl: BASE_URL,
  lmsBaseUrl: LMS_BASE_URL,
  loginUrl: LOGIN_URL,
  logoutUrl: LOGOUT_URL,
  refreshAccessTokenEndpoint: REFRESH_ACCESS_TOKEN_ENDPOINT,
  accessTokenCookieName: ACCESS_TOKEN_COOKIE_NAME,
  csrfTokenApiPath: CSRF_TOKEN_API_PATH,
});

const AuthPage = () => {
  const [authenticatedUser /* , setAuthenticatedUser */] = useState(async () =>
    fetchAuthenticatedUser()
  ); // validates and decodes JWT token
  const [
    authenticatedHttpClient /* , setAuthenticatedHttpClient */,
  ] = useState(() => getAuthenticatedHttpClient());
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const getAuthenticatedUser = async () => {
      if (authenticatedUser) {
        const response = await authenticatedHttpClient.get(
          `${BASE_URL}/api/user/data/${authenticatedUser.username}`
        ); // fetching from an authenticated API using user data
        setCurrentUser(response);
      }
    };

    getAuthenticatedUser();
  }, [
    setCurrentUser,
    authenticatedHttpClient,
    authenticatedUser,
    authenticatedUser.username,
  ]);

  return (
    <>
      <h1>Auth page!</h1>
      <h2>
        Current user is {currentUser ? currentUser.displayName : 'loading'}
      </h2>
    </>
  );
};

export default AuthPage;
