import { createMockGroups } from '../../utils/testing';

export const makeProps = () => ({
  className: {}, tags: createMockGroups.categoryGrouping.group, getSlug: (s) => s,
});
