import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('Primary', () => <Button activeColor="hsl(0, 23%, 66%)">SET FRANCUSKI</Button>)
  .add('Secondary', () => <Button activeColor="hsl(0, 23%, 66%)">SET FRANCUSKI</Button>);
