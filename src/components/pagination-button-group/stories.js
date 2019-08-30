import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import PaginationButtonGroup from './index';
import { makeProps } from './mock';

storiesOf('Pagination Button Group', module)
  .add('default', () => (
    <PaginationButtonGroup
      {...makeProps()}
      numOfPages={number('Number of Pages', 3, { min: 3, max: 4 })}
      currentPage={number('Current Page No.', 1, { min: 1, max: 3 })}
    />
  ));
