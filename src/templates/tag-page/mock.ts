import { createMockPosts } from '../../utils/testing';

export const makeProps = () => ({
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
  },
});
