import { TProps } from './types';
import { mockPost } from "../../fixtures/posts";

export const makeProps = ({ dateModified = null } = {}): TProps => {
  if (dateModified) {
    mockPost.frontmatter.dateModified = dateModified;
  }
  return {
    data: {
      post: { ...mockPost },
    },
  };
};
