import { createMockPosts, createMockProjects } from '../../utils/testing';

export const makeProps = () => ({
  data: {
    project: createMockProjects[0].node,
    posts: {
      edges: createMockPosts,
    },
  },
});
