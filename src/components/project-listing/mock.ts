import { TProps } from './types';
import { mockProjects } from "../../fixtures/projects";

export const makeProps = (): TProps => ({
  projects: mockProjects,
  heading: 'List of Projects',
});

