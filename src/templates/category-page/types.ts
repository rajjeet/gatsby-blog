export type TImage = {
  childImageSharp: {
    fluid: {
      base64: string;
      aspectRatio: number;
      src: string;
      srcSet: string;
      sizes: string;
    };
  };
};

export type TFrontMatter = {
  title: string;
  date: string;
  tags: string[];
  category: string;
  description: string;
};

export type TEdge = {
  node: {
    id: string;
    timeToRead: number;
    frontmatter: TFrontMatter & {image: TImage};
    fields: {
      slug: string;
    };
    excerpt: string;
    body: string;
  };
}

export type TProps = {
  data: {
    posts: {
      edges: TEdge[];
    };
  };
  pageContext: {
    category: string;
    numOfPages: number;
    currentPage: number;
    paginationSlug: string;
  };

}

