import { mockPosts } from '../../fixtures/testing';
import { TProps } from './types';

export const makeProps = (): TProps => ({
  posts: mockPosts,
});

