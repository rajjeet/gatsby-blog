import { createMockPosts } from '../../utils/testing';
import { TProps } from './index';

export const makeProps = (): TProps => ({
  data: {
    posts: {
      edges: createMockPosts,
    },
  },
  pageContext: {
    limit: 5,
    skip: 2,
    numOfPages: 2,
    numOfPosts: 10,
    currentPage: 3,
    tag: 'Life Skills',
    paginationSlug: '',
  },
});
