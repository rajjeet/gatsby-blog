import React from 'react';
import { render } from '@testing-library/react';
import IndexPage, { TProps } from './index';
import { mockPosts } from '../../../fixtures/posts';

export const makeProps = (): TProps => (
  {
    data: {
      posts: {
        edges: [
          ...mockPosts,
        ],
      },
    },
  }
);

describe('Index Page', () => {
  it('should have heading called "Recent posts"', () => {
    const { getByText } = render(<IndexPage {...makeProps()} />);
    expect(getByText('Recent Posts')).toBeDefined();
  });
});
