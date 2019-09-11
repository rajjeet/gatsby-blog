import { createMockPosts } from '../../utils/testing';

export const makeProps = ({
  className = {},
  posts = createMockPosts,
  heading = 'Post Listing',
  numOfPages = 5,
  currentPage = 1,
  paginationSlug = '/sample_slug/',
} = {}) => ({
  className,
  posts,
  heading,
  numOfPages,
  currentPage,
  paginationSlug,
});
