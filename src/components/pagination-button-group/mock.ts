export const makeProps = ({ currentPage = 1, numOfPages = 5 } = {}): TProps => ({
  className: '', currentPage, numOfPages, paginationSlug: '',
});

export type TProps = {
  className: string;
  currentPage: number;
  numOfPages: number;
  paginationSlug: string;
};
