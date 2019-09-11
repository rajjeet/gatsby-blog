import React from 'react';
import { storiesOf } from '@storybook/react';
import TagListing from './index';
import { makeProps } from './mock';

storiesOf('Tag Listing', module)
  .add('default', () => (
    <TagListing {...makeProps()} />
  ));
