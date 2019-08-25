import React from 'react';
import { storiesOf } from '@storybook/react';
import AuthorCard from './index';
import { makeProps } from './mock';

storiesOf('Author Card', module)
  .add('default', () => (
    <AuthorCard {...makeProps()} />
  ));
