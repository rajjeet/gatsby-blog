import { mockPosts } from '../../fixtures/testing';
import { TProps } from './types';

export const makeProps = (): TProps => ({
  data: {
    project: {
      frontmatter: {
        title: 'Condo Landing Pages',
        description: 'An automated process for building fast, responsive landing pages for pre-construction condos.',
        techStackTags: [
          {
            type: 'AWS',
            label: 'AWS CloudFormation',
          },
        ],
        links: [
          {
            label: 'Github Code',
            value: 'https://github.com/rajjeet/charismacondos',
          },
        ],
      },
      body: null,
    },
    posts: {
      edges: mockPosts,
    },
  },
});
