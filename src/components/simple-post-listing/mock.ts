import { createMockPosts } from '../../utils/testing';
import { TProps } from './types';

export const makeProps = (): TProps => ({
  posts: createMockPosts,
});

