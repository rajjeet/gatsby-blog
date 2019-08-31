import React from 'react';
import { storiesOf } from '@storybook/react';
import ProjectPage from './index';
import { makeProps } from './mock';

storiesOf('Project Page', module)
  .add('default', () => (
    <ProjectPage {...makeProps()} />
  ));
