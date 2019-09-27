import { TProps } from './types';

export const makeProps = ({ currentPage = 1, numOfPages = 5 } = {}): TProps => ({
  currentPage, numOfPages, paginationSlug: '',
});

