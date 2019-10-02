import { TProps } from './types';
import { mockPosts } from '../../fixtures/posts';

export const makeProps = ({
  posts = mockPosts,
  heading = 'Post Listing',
  numOfPages = 5,
  currentPage = 1,
  paginationSlug = '/sample_slug/',
} = {}): TProps => ({
  posts,
  heading,
  numOfPages,
  currentPage,
  paginationSlug,
});

