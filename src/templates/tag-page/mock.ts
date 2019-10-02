import { TProps } from './types';
import { mockPosts } from "../../fixtures/posts";

export const makeProps = (): TProps => ({
  data: {
    posts: {
      edges: mockPosts,
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
