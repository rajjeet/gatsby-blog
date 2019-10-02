import { TPostEdge } from '../blog-post-listing/types';

export interface TProps {
  data: {
    project: {
      frontmatter: {
        title: string;
        description: string;
        techStackTags: [{
          type: string;
          label: string;
        }];
        links: [{
          label: string;
          value: string;
        }];
      };
      body: string;
    };
    posts: {
      edges: TPostEdge[];
    };
  };
}
