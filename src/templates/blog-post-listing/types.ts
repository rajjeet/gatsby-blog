import { TPostEdge } from '../category-page/types';

export interface TProps {
  data: {
    posts: {
      edges: TPostEdge[];
    };
  };
  pageContext: {
    tag: string;
    numOfPages: number;
    currentPage: number;
  };
}
