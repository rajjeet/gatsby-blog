type TFrontMatter = {
  title: string;
  description: string;
  slug?: string;
  datePublished?: string;
};

export type TProps = {
  postData?: {
    childMarkdownRemark?: {
      frontmatter: TFrontMatter;
    };
  };
  frontmatter?: TFrontMatter;
  postImage?: string;
  isBlogPost?: boolean;
};
