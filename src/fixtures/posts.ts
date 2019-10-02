import { mockGatsbyImageSharpFluid } from './gatsby-images';

export const mockPosts = [
  {
    node: {
      id: '13cd14f6-36e9-55cd-8a4e-4bf1aea2c9e6',
      timeToRead: 2,
      frontmatter: {
        title: 'Adding a Project Section to My Website',
        dateCreated: '11 May, 2019',
        dateModified: null,
        tags: [
          'Gatsby JS X',
        ],
        description: "Over the past year, I truly learned the importance of building side projects as a software developer. Besides building projects, showing them to the world is just as important. That's why I created the project section.",
        image: mockGatsbyImageSharpFluid.file,
      },
      fields: {
        slug: '/adding-project-section-to-website/',
      },
      excerpt: 'Original Intent My original intent was to connect related blog posts using…',
      body: null,
    },
  },
  {
    node: {
      id: '5f2933ac-25ed-5ae0-84d7-c5d59fc4448e',
      timeToRead: 4,
      frontmatter: {
        title: 'State Management using React Hooks',
        dateCreated: '02 May, 2019',
        dateModified: null,
        tags: [
          'React X',
          'Angular X',
        ],
        description: 'I was learning about the new React Hooks, when I came across a blog post that claims to build state management, like Redux, using React Hooks. I decided to try it out and found it surprisingly simple and effective.',
        image: mockGatsbyImageSharpFluid.file,
      },
      fields: {
        slug: '/state-management-react-hooks/',
      },
      excerpt: 'Introduction This blog post is inspired by \n another post , that demonstrates…',
      body: null,
    },
  },
  {
    node: {
      id: 'ea9849ff-7e43-5fe2-88d8-5c441cfb4dad',
      timeToRead: 3,
      frontmatter: {
        title: 'Build A Super Customized and Performant Blog',
        dateCreated: '21 February, 2019',
        dateModified: null,
        tags: [
          'Blog',
          'React',
        ],
        description: 'Starting a blog seemed easy to me, but selecting the right tool was not straight forward for my goals. See why I decided to use Gatsby to host Ortmesh, and how you might benefit from doing the same.',
        image: mockGatsbyImageSharpFluid.file,
      },
      fields: {
        slug: '/build-super-customized-performant-blog/',
      },
      excerpt: 'Humble Beginnings For most of us, a blog is about sharing ideas, helping others…',
      body: null,
    },
  },
];
export const mockPost = {
  id: '5f2933ac-25ed-5ae0-84d7-c5d59fc4448e',
  timeToRead: 4,
  frontmatter: {
    title: 'State Management using React Hooks',
    dateCreated: '02 May, 2019',
    dateModified: null,
    tags: [
      'React X',
      'Angular X',
    ],
    category: 'Guide X',
    description: 'I was learning about the new React Hooks, when I came across a blog post that claims to build state management, like Redux, using React Hooks. I decided to try it out and found it surprisingly simple and effective.',
    image: {
      publicURL: '/static/rawpixel-780494-unsplash-e36954fd765f72a96646fa7c3fa89d49.jpg',
    },
  },
  fields: {
    slug: '/state-management-react-hooks/',
  },
  excerpt: 'Introduction This blog post is inspired by \n another post , that demonstrates…',
  body: null,
  tableOfContents: {
    items: [
      {
        url: '#overview',
        title: 'Overview',
      },
      {
        url: '#the-why',
        title: 'The Why',
      },
    ],
  },
};
