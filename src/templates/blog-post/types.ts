import { TFrontMatter } from '../category-page/types';

export type TProps = {
  className: string;
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
