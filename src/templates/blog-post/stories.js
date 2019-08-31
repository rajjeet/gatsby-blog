import React from 'react';
import { storiesOf } from '@storybook/react';
import BlogPost from './index';
import { makeProps } from './mock';

storiesOf('Blog Post', module)
  .add('default', () => (
    <BlogPost {...makeProps()} />
  ));
