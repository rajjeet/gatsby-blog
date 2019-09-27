import { createMockGroups } from '../../utils/testing';
import { TProps } from './types';

export const makeProps = (): TProps => ({
  tags: createMockGroups.categoryGrouping.group,
  getSlug: (s): string => s,
});

