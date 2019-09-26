type TFrontMatter = {
  title: string;
  description: string;
  slug?: string;
  date?: string;
};

export type TProps = {
  frontmatter?: TFrontMatter;
  postImage?: string;
  isBlogPost?: boolean;
};
