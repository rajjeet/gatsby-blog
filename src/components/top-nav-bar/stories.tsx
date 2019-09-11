import React from 'react';
import { storiesOf } from '@storybook/react';
import TechStackTagListing from './index';
import { makeProps } from './mock';

storiesOf('Top Nav Bar', module)
  .add('default', () => (
    <TechStackTagListing {...makeProps()} />
  ));
