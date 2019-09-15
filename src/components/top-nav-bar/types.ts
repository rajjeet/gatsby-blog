import { TImage } from '../../templates/category-page/types';

export type TSiteMetadata = {
  title: string;
  description: string;
  canonicalUrl: string;
  image: string;
  author: {
    name: string;
    minibio: string;
  };
  organization: {
    name: string;
    url: string;
    logo: string;
  };
  social: {
    twitter: string;
    fbAppID: string;
  };
  categories:
    {
      slug: string;
      name: string;
    }[];
};

export type TProps = {
  className: string;
  data: {
    file: TImage;
    site: {
      siteMetadata: TSiteMetadata;
    };
  };
}
