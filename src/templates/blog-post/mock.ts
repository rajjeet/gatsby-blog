import { TProps } from './types';
import { mockPost } from '../../fixtures/testing';

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
