import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import { Header } from '../../components';

import { UserHeader } from '../../components/Header/UserHeader';

storiesOf('Header', module)
  .add('Complete Header', () => <Header />)
  .add('User header (black bar)', () => <UserHeader />);
// .add('Gray bar', () => <GymButton fullWidth>Learn more...</GymButton>);
