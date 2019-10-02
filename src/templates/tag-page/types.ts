import { TPostEdge } from '../blog-post-listing/types';

export interface TProps {
  data: {
    posts: {
      edges: TPostEdge[];
    };
  };
  pageContext: {
    limit: number;
    skip: number;
    numOfPages: number;
    numOfPosts: number;
    currentPage: number;
    tag: string;
    paginationSlug: string;
  };
}
