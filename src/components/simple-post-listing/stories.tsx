import React from 'react';
import { storiesOf } from '@storybook/react';
import { SimplePostListing } from './index';
import { makeProps } from './mock';

storiesOf('Simple Post Listing', module)
  .add('default', () => (
    <SimplePostListing {...makeProps()} />
  ));
