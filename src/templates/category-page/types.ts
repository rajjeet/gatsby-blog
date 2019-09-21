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
  date: string;
  tags: string[];
  description: string;
};

export type TPostNode = {
  id: string;
  timeToRead: number;
  frontmatter: TFrontMatter & {image: TImage};
  fields: {
    slug: string;
  };
  excerpt: string;
  body: string;
};

export type TPostEdge = {
  node: TPostNode;
}

export type TProps = {
  data: {
    posts: {
      edges: TPostEdge[];
    };
  };
  pageContext: {
    category: string;
    numOfPages: number;
    currentPage: number;
    paginationSlug: string;
  };

}

