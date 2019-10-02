import { mockPosts } from '../../fixtures/testing';
import { TProps } from './types';

export const makeProps = (): TProps => ({
  data: {
    posts: {
      edges: mockPosts,
    },
  },
  pageContext: {
    numOfPages: 2,
    currentPage: 3,
    tag: 'Sample Tag',
  },
});
