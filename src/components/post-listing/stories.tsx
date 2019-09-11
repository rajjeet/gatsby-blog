import React from 'react';
import { storiesOf } from '@storybook/react';
import PostListing from './index';
import { makeProps } from './mock';

storiesOf('Post Listing', module)
  .add('default', () => (
    <PostListing {...makeProps()} />
  ));
