import { TProps } from './types';
import { mockPost } from '../../utils/testing';

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
