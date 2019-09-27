export type TProps = {
  tags: {fieldValue: string; totalCount?: number}[];
  getSlug: (string) => string;
  inline?: boolean;
};
