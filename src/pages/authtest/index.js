import React, { useEffect, useState } from 'react';
import {
  fetchAuthenticatedUser,
  getAuthenticatedHttpClient,
} from '@edx/frontend-platform/auth';
import { getConfig } from '@edx/frontend-platform';

const AuthPage = () => {
  const config = getConfig();
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
          `${config.LMS_BASE_URL}/api/user/data/${authenticatedUser.username}`
        ); // fetching from an authenticated API using user data
        setCurrentUser(response);
      }
    };

    getAuthenticatedUser();
  }, [
    config.LMS_BASE_URL,
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
