import { mockGroups } from '../../fixtures/tags';
import { TProps } from './types';

export const makeProps = (): TProps => ({
  tags: mockGroups.categoryGrouping.group,
  getSlug: (s): string => s,
});

