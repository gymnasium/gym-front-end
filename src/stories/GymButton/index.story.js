import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import { GymButton } from '../../components';

storiesOf('GymButton', module)
  .add('with text', () => <GymButton>Hello Button</GymButton>)
  .add('with some emoji', () => (
    <GymButton>
      <span role='img' aria-label='so cool'>
        😀 😎 👍 💯
      </span>
    </GymButton>
  ));
