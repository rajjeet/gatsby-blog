import { createMockProjects } from '../../utils/testing';
import { TProps } from './types';

export const makeProps = (): TProps => ({
  className: '',
  projects: createMockProjects,
  heading: 'List of Projects',
});

