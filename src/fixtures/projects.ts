import { mockGatsbyImageSharpFluid } from './gatsby-images';

export const mockProjects = [
  {
    node: {
      frontmatter: {
        title: 'Condo Landing Pages',
        description: 'An automated process for building fast, responsive landing pages for pre-construction condos.',
        thumbnail: mockGatsbyImageSharpFluid.file,
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
      fields: {
        slug: '/projects/condo-landing-pages/',
      },
      body: null,
    },
  },
  {
    node: {
      frontmatter: {
        title: 'Kitchen Quoter',
        description: 'A do-it-yourself calculator that generates dollar quotes based on user-specified fields and formula.',
        techStackTags: [
          {
            type: 'JavaScript',
            label: 'GatsbyJS',
          },
          {
            type: 'AWS',
            label: 'AWS S3',
          },
        ],
        links: [
          {
            label: 'ex. CharismaCondos.net',
            value: 'https://dgftd2qqywjy1.cloudfront.net',
          },
          {
            label: 'ex. SouthWoodbridge.com',
            value: 'https://d1n2vqbqyes277.cloudfront.net',
          },
        ],
        thumbnail: mockGatsbyImageSharpFluid.file,
      },
      fields: {
        slug: '/projects/kitchen-quoter/',
      },
      body: null,
    },
  },
];
export const mockProjectLinks = [
  {
    label: 'ex. CharismaCondos.net',
    value: 'https://dgftd2qqywjy1.cloudfront.net',
  },
  {
    label: 'ex. SouthWoodbridge.com',
    value: 'https://d1n2vqbqyes277.cloudfront.net',
  },
  {
    label: 'Github Code',
    value: 'https://github.com/rajjeet/charismacondos',
  },
];
