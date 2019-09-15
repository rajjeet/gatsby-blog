import { createMockPosts } from '../../utils/testing';
import { TPostEdge } from '../../templates/category-page/types';

export const makeProps = ({
  className = '',
  posts = createMockPosts,
  heading = 'Post Listing',
  numOfPages = 5,
  currentPage = 1,
  paginationSlug = '/sample_slug/',
} = {}): TProps => ({
  className,
  posts,
  heading,
  numOfPages,
  currentPage,
  paginationSlug,
});

export type TProps = {
  className: string;
  posts: TPostEdge[];
  heading?: string;
  numOfPages: number;
  currentPage: number;
  paginationSlug: string;
}
