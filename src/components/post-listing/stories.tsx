import React from 'react';
import { storiesOf } from '@storybook/react';
import { PostListing } from './index';
import { makeProps } from './mock';
import { Post } from './post';

storiesOf('Post Listing', module)
  .add('default', () => (
    <PostListing {...makeProps()} />
  ))
  .add('with "All Posts" button', () => (
    <PostListing {...makeProps({ numOfPages: 1 })} />
  ))
  .add('post', () => (
    <Post {...makeProps().posts[0]} />
  ));
