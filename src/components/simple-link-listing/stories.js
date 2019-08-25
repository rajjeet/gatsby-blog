import React from 'react';
import { storiesOf } from '@storybook/react';
import SimpleLinkListing from './index';
import { makeProps } from './mock';

storiesOf('Simple Link Listing', module)
  .add('default', () => (
    <SimpleLinkListing {...makeProps()} />
  ));
