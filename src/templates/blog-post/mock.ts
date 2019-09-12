import { TProps } from './types';
import { mockPost } from '../../utils/testing';

export const makeProps = (): TProps => ({
  className: '',
  data: {
    post: mockPost,
  },
});
