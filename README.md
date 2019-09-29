# Gatsby Blog [![Build Status](https://travis-ci.org/rajjeet/gatsby-blog.svg?branch=master)](https://travis-ci.org/rajjeet/gatsby-blog) [![codecov](https://codecov.io/gh/rajjeet/gatsby-blog/branch/master/graph/badge.svg)](https://codecov.io/gh/rajjeet/gatsby-blog)
The codebase I'm using to run my personal blog at https://ortmesh.com. 

### Setup
```
npm install -g gatsby
npm install
npm run dev
```
### Motivation
I wanted a blog site that I can fully customize and be cheap to run.
Hence, I chose [GatsbyJS](https://gatsbyjs.org).

### Adding Pages
To create posts, add `src/pages/posts/<YYYY-MM>/<page-name>/index.tsx`.

To create project pages for your portfolio, add `src/pages/projects/<project-name>/index.tsx`.

To add standalone static pages, add `src/pages/page/<page-name>/index.tsx`.

Remove my pages and add your own. 

### File Structure
Each component, page, or template may the following files for specific purposes:
* `index.tsx` - main component
* `index.test.tsx` - test spec
* `mock.ts` - fixtures for tests
* `stories.tsx` - storybook stories for visual sand-boxing
* `types.tsx` - typescript types
