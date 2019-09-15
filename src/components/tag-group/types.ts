export type TProps = {
  className: string;
  tags: {fieldValue: string; totalCount: number}[];
  getSlug: (string) => string;
};
