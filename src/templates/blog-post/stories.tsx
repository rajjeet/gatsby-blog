import React from 'react';
import { storiesOf } from '@storybook/react';
import { PostSummary } from './post-summary';

storiesOf('Blog Post', module)
  .add('post summary', () => (
    <PostSummary
      title="5 Ways to Win Big in E-commerce Markey"
      dateCreated="2019-09-10"
      timeToRead={10}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis venenatis diam, eu ali."
      tags={['React']}
    />
  ));
