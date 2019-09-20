import React from 'react';
import { storiesOf } from '@storybook/react';
import {Headshot} from './index';

storiesOf('Headshot', module)
  .add('default', () => (
    <Headshot  />
  ));
