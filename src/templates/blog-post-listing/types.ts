export type TFluid = {
  base64: string;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};
export type TImage = {
  childImageSharp: {
    fluid: TFluid;
  };
};
export type TFrontMatter = {
  title: string;
  dateCreated: string;
  dateModified: string;
  description: string;
};
export type TPostNode = {
  id: string;
  timeToRead: number;
  frontmatter: TFrontMatter & {image: TImage; tags: string[]};
  fields: {
    slug: string;
  };
  excerpt: string;
  body: string;
};
export type TPostEdge = {
  node: TPostNode;
}

export interface TProps {
  data: {
    posts: {
      edges: TPostEdge[];
    };
  };
  pageContext: {
    tag: string;
    numOfPages: number;
    currentPage: number;
  };
}
