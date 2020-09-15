import React from 'react';
import { storiesOf } from '@storybook/react';
import Underline from './Underline';

storiesOf('Underline', module).add('Normal', () => <Underline size={75} width={150} />);
