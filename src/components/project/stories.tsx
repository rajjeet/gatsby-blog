import React from 'react';
import { storiesOf } from '@storybook/react';
import { Project } from './index';
import { makeProps } from './mock';

storiesOf('Project', module)
  .add('default', () => (
    <Project {...makeProps()} />
  ));
