import { TProps } from './types';
import { mockPost } from '../../utils/testing';

export const makeProps = (): TProps => ({
  data: {
    post: mockPost,
  },
});
