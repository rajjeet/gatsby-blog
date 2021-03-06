import { TPostEdge, TPostNode } from '../../templates/blog-post-listing/types';

export type TProps = {
  posts: TPostEdge[];
  heading?: string;
} & TPaginationProps;

export type TPaginationProps = {
  numOfPages?: number;
  currentPage?: number;
  paginationSlug?: string;
};

export type TPostProps = {
  node: TPostNode;
}
