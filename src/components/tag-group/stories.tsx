import React from 'react';
import { storiesOf } from '@storybook/react';
import { TagGroup } from './index';
import { makeProps } from './mock';

storiesOf('Tag Group', module)
  .add('default', () => (
    <TagGroup {...makeProps()} />
  ));
