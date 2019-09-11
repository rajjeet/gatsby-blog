import React from 'react';
import { storiesOf } from '@storybook/react';
import TechStackTagListing from './index';
import { makeProps } from './mock';

storiesOf('Tech Stack Tag Listing', module)
  .add('default', () => (
    <TechStackTagListing {...makeProps()} />
  ));
