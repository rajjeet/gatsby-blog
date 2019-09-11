import React from 'react';
import { storiesOf } from '@storybook/react';
import ProjectListing from './index';
import { makeProps } from './mock';

storiesOf('Project Listing', module)
  .add('default', () => (
    <ProjectListing {...makeProps()} />
  ));
