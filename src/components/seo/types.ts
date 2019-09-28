type TFrontMatter = {
  title: string;
  description: string;
  slug?: string;
  dateCreated?: string;
  dateModified?: string;
};

export type TProps = {
  frontmatter?: TFrontMatter;
  postImage?: string;
  isBlogPost?: boolean;
};
