import { TProps } from './types';

export const makeProps = (): TProps => ({
  items: [
    {
      url: '#introduction',
      title: 'Introduction',
    },
    {
      url: '#the-basics',
      title: 'The Basics',
      items: [
        {
          url: '#state-management-redux',
          title: 'State Management (Redux)',
        },
        {
          url: '#context-api',
          title: 'Context API',
        },
      ],
    },
    {
      url: '#manage-global-state-in-react-hooks',
      title: 'Manage Global State in React Hooks',
    },
    {
      url: '#middleware-logger',
      title: 'Middleware: Logger',
    },
  ],
});

