import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Heading', module)
  .add('Normal', () => <Heading>SET FRANCUSKI</Heading>)
  .add('big', () => <Heading big>SET FRANCUSKI</Heading>);
