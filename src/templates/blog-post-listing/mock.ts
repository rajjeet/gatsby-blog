import { TProps } from './types';
import { mockPosts } from "../../fixtures/posts";

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
