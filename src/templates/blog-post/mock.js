import { createMockPosts } from '../../utils/testing';

export const makeProps = () => ({
  className: {},
  data: {
    post: createMockPosts[1].node,
  },
});
