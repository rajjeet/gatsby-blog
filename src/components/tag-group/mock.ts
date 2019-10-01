import { mockGroups } from '../../utils/testing';
import { TProps } from './types';

export const makeProps = (): TProps => ({
  tags: mockGroups.categoryGrouping.group,
  getSlug: (s): string => s,
});

