/* eslint-disable import/prefer-default-export */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import {
  configure as configureAuth,
  AxiosJwtAuthService,
} from '@edx/frontend-platform/auth';
import { getConfig } from '@edx/frontend-platform/config';

import {
  configure as configureLogging,
  getLoggingService,
  NewRelicLoggingService,
  // logError,
} from '@edx/frontend-platform/logging';

import 'bootstrap/dist/css/bootstrap.css';
import './src/styles/global.css';
import './src/styles/_theme.css';

import wrapWithProvider from './wrap-with-provider';

export const wrapRootElement = wrapWithProvider;

configureLogging(NewRelicLoggingService, {
  config: getConfig(),
});

configureAuth(AxiosJwtAuthService, {
  loggingService: getLoggingService(),
  config: getConfig(),
});
