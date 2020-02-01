import React from 'react';
import { storiesOf } from '@storybook/react';
import { AdjacentPostLink } from '.';
import { next, previous } from './mock';

storiesOf('AdjacentPostLink', module)
  .add('default', () => (
    <AdjacentPostLink next={next} previous={previous} />
  ));
