/* eslint-disable import/prefer-default-export */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import 'bootstrap/dist/css/bootstrap.css';
import './src/styles/global.css';
import './src/styles/_theme.css';
import wrapWithProvider from './wrap-with-provider';

export const wrapRootElement = wrapWithProvider;
