import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { TFrontMatter } from '../blog-post-listing/types';

type TItems = {
  title: string;
  url: string;
};

export type TProps = {
  data: {
    post: {
      tableOfContents: {
        items: TItems[];
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

export type TPostNavigation = {
  items: TItems[]; handleButtonClick: () => void; showMobileToc: boolean;
};

export type TModalToggleButton = {
  label: string; icon: IconProp; onClick: () => void;
};
export type TPostSummary = {
  title: string;
  date: string;
  timeToRead: number;
  disqusConfig: {
    url: string;
    identifier: string;
    title: string;
  };
  description: string;
  tags: string[];
};
