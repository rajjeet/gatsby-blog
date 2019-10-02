import { TProps } from './types';
import { mockPosts } from "../../fixtures/posts";

export const makeProps = (): TProps => ({
  posts: mockPosts,
});

