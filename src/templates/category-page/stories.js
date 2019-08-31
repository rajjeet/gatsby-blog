import React from 'react';
import { storiesOf } from '@storybook/react';
import CategoryPage from './index';
import { makeProps } from './mock';

storiesOf('Category Page', module)
  .add('default', () => (
    <CategoryPage {...makeProps()} />
  ));
