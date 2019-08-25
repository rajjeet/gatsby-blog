import React from 'react';
import { storiesOf } from '@storybook/react';
import PaginationButtonGroup from './index';
import { makeProps } from './mock';

storiesOf('Pagination Button Group', module)
  .add('default', () => (
    <PaginationButtonGroup {...makeProps()} />
  ));
