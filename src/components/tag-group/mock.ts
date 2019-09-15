import { createMockGroups } from '../../utils/testing';
import { TProps } from './types';

export const makeProps = (): TProps => ({
  className: '',
  tags: createMockGroups.categoryGrouping.group,
  getSlug: (s): string => s,
});

