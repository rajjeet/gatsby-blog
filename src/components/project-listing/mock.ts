import { mockProjects } from '../../fixtures/testing';
import { TProps } from './types';

export const makeProps = (): TProps => ({
  projects: mockProjects,
  heading: 'List of Projects',
});

