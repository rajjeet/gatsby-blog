import React from 'react';
import { storiesOf } from '@storybook/react';
import CategoryListing from './index';
import { makeProps } from './mock';

storiesOf('Author Social Link Group', module)
  .add('default', () => (
    <CategoryListing {...makeProps()} />
  ));
