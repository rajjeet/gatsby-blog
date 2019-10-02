import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { TFrontMatter } from '../blog-post-listing/types';

type TItems = {
  title: string;
  url: string;
};

type TTag = string;

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
      frontmatter: TFrontMatter
        & {
        image: {
          publicURL: string;
        };
      } & {
        tags: TTag[];
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
  dateCreated: string;
  dateModified?: string;
  timeToRead: number;
  description: string;
  tags: TTag[];
  url: string;
};
