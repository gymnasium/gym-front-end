import {
  configure,
  fetchAuthenticatedUser,
  getAuthenticatedHttpClient
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

console.log('this is what getconfig returned');
console.log(config);

configure({
  loggingService: getLoggingService(),
  appBaseUrl: BASE_URL,
  lmsBaseUrl: LMS_BASE_URL,
  loginUrl: LOGIN_URL,
  logoutUrl: LOGOUT_URL,
  refreshAccessTokenEndpoint: REFRESH_ACCESS_TOKEN_ENDPOINT,
  accessTokenCookieName: ACCESS_TOKEN_COOKIE_NAME,
  csrfTokenApiPath: CSRF_TOKEN_API_PATH,
});

const authenticatedUser = await fetchAuthenticatedUser(); // validates and decodes JWT token
const authenticatedHttpClient = getAuthenticatedHttpClient();
const response = await getAuthenticatedHttpClient().get(`https://example.com/api/user/data/${authenticatedUser.username}`); // fetching from an authenticated API using user data
