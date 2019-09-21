import React from 'react';
import { storiesOf } from '@storybook/react';
import { AuthorCard } from './index';

storiesOf('Author Card', module)
  .add('default', () => (
    <AuthorCard />
  ));
