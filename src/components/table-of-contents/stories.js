import React from 'react';
import { storiesOf } from '@storybook/react';
import TableOfContents from './index';
import { makeProps } from './mock';

storiesOf('Table Of Contents', module)
  .add('default', () => (
    <TableOfContents {...makeProps()} />
  ));
