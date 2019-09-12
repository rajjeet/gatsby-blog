import { createMockPosts } from '../../utils/testing';
import { TProps } from './types';

export const makeProps = (): TProps => ({
  data: {
    posts: {
      edges: createMockPosts,
    },
  },
  pageContext: {
    numOfPages: 2,
    currentPage: 3,
    tag: 'Sample Tag',
  },
});
