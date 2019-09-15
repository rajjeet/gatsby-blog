export type TProps = {
  depth?: number;
  items: {
    url: string;
    title: string;
    items?: {
      url: string;
      title: string;
    }[];
  }[];
};
