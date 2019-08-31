export const createMockGatsbyImageSharpFluid = {
  file: {
    childImageSharp: {
      fluid: {
        base64: '',
        aspectRatio: 1,
        src: '',
        srcSet: '',
        sizes: '',
      },
    },
  },
};

export const createMockGroups = {
  categoryGrouping: {
    group: [
      {
        fieldValue: 'Experience',
        totalCount: 1,
      },
      {
        fieldValue: 'Guide',
        totalCount: 2,
      },
    ],
  },
};

export const createMockProjects = [
  {
    node: {
      frontmatter: {
        title: 'Condo Landing Pages',
        description: 'An automated process for building fast, responsive landing pages for pre-construction condos.',
        tags: null,
        thumbnail: createMockGatsbyImageSharpFluid.file,
      },
      fields: {
        slug: '/projects/condo-landing-pages/',
      },
    },
  },
  {
    node: {
      frontmatter: {
        title: 'Kitchen Quoter',
        description: 'A do-it-yourself calculator that generates dollar quotes based on user-specified fields and formula.',
        tags: null,
        thumbnail: createMockGatsbyImageSharpFluid.file,
      },
      fields: {
        slug: '/projects/kitchen-quoter/',
      },
    },
  },
];

export const createMockProjectLinks = [
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

export const createMockPosts = [
  {
    node: {
      id: '13cd14f6-36e9-55cd-8a4e-4bf1aea2c9e6',
      timeToRead: 2,
      frontmatter: {
        title: 'Adding a Project Section to My Website',
        date: '11 May, 2019',
        tags: [
          'Gatsby JS X',
        ],
        category: 'Side Project X',
        description: "Over the past year, I truly learned the importance of building side projects as a software developer. Besides building projects, showing them to the world is just as important. That's why I created the project section.",
        image: createMockGatsbyImageSharpFluid.file,
      },
      fields: {
        slug: '/adding-project-section-to-website/',
      },
      excerpt: 'Original Intent My original intent was to connect related blog posts using…',
    },
  },
  {
    node: {
      id: '5f2933ac-25ed-5ae0-84d7-c5d59fc4448e',
      timeToRead: 4,
      frontmatter: {
        title: 'State Management using React Hooks',
        date: '02 May, 2019',
        tags: [
          'React X',
          'Angular X',
        ],
        category: 'Guide X',
        description: 'I was learning about the new React Hooks, when I came across a blog post that claims to build state management, like Redux, using React Hooks. I decided to try it out and found it surprisingly simple and effective.',
        image: createMockGatsbyImageSharpFluid.file,
      },
      fields: {
        slug: '/state-management-react-hooks/',
      },
      excerpt: 'Introduction This blog post is inspired by \n another post , that demonstrates…',
    },
  },
];
