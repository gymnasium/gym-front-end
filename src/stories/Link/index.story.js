import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Link } from '../../components';

storiesOf('Link', module).add('Standard link', () => (
  <Link to="https://www.thegymnasium.com/signup">Sign up now</Link>
));
storiesOf('Link', module).add('Link without URL', () => (
  <Link>Sign up now</Link>
));
