import { TFrontMatter } from '../../templates/blog-post-listing/types';

export type TProps = {
  frontmatter?: TFrontMatter & {slug?: string};
  postImage?: string;
  isBlogPost?: boolean;
};
