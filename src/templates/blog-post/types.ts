import { TFrontMatter } from '../blog-post-listing/types';

export type TProps = {
  data: {
    post: {
      tableOfContents: {
        items: {
          title: string;
          url: string;
        }[];
      };
      id: string;
      timeToRead: number;
      body: string;
      fields: {
        slug: string;
      };
      frontmatter: TFrontMatter & {
        image: {
          publicURL: string;
        };
      };
    };
  };
}

export type TState = {
  showMobileToc: boolean;
}
