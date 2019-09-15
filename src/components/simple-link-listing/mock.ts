import { createMockProjectLinks } from '../../utils/testing';
import { TProps } from './types';

export const makeProps = (): TProps => ({
  links: createMockProjectLinks,
});

