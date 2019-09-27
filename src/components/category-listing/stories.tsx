import React from 'react';
import { storiesOf } from '@storybook/react';
import { CategoryListing } from './index';
import { makeProps } from './mock';

storiesOf('Category Listing', module)
  .add('default', () => (
    <CategoryListing {...makeProps()} />
  ));
