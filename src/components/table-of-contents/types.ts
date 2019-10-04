export type TProps = {
  isCSR?: boolean;
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
