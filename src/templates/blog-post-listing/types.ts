import { TEdge } from '../category-page/types';

export interface TProps {
  data: {
    posts: {
      edges: TEdge[];
    };
  };
  pageContext: {
    tag: string;
    numOfPages: number;
    currentPage: number;
  };
}
