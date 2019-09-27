/* eslint @typescript-eslint/no-var-requires: 0 */
/* eslint @typescript-eslint/explicit-function-return-type: 0 */

const { uniq } = require('lodash');
const path = require('path');
const urlJoin = require('url-join');
const { getTagSlug } = require('../src/utils/slugs');

function createPostListingByTags(allPosts, POSTS_PER_PAGE, createPage) {
// Tags
  let allTags = [];
  allPosts.forEach(({ node }) => {
    allTags = allTags.concat(node.frontmatter.tags);
  });
  const uniqueTags = uniq(allTags);
  uniqueTags.forEach((tag) => {
    const tagSlug = getTagSlug(tag);
    const tagPosts = allPosts.filter(({ node }) => {
      const { tags } = node.frontmatter;
      return tags && tags.find((blogTag) => blogTag === tag);
    });
    const totalNumOfTaggedPosts = tagPosts.length;
    const numOfPagesPerTag = Math.ceil(totalNumOfTaggedPosts / POSTS_PER_PAGE);
    const tagPageTemplate = path.resolve('./src/templates/tag-page/index.tsx');
    Array.from({ length: numOfPagesPerTag }).forEach((_, index) => {
      createPage({
        path: urlJoin(tagSlug, `${index + 1}`),
        component: tagPageTemplate,
        context: {
          limit: POSTS_PER_PAGE,
          skip: index * POSTS_PER_PAGE,
          numOfPages: numOfPagesPerTag,
          numOfPosts: totalNumOfTaggedPosts,
          currentPage: index + 1,
          tag,
          paginationSlug: tagSlug,
        },
      });
    });
  });
}

function createPostListing(allPosts, POSTS_PER_PAGE, createPage) {
  const numOfPostsPerPostListing = allPosts.length;
  const numOfPages = Math.ceil(numOfPostsPerPostListing / POSTS_PER_PAGE);
  const postListingTemplate = path.resolve('./src/templates/blog-post-listing/index.tsx');
  Array.from({ length: numOfPages }).forEach((_, index) => {
    createPage({
      path: urlJoin('blog', `${index + 1}`),
      component: postListingTemplate,
      context: {
        limit: POSTS_PER_PAGE,
        skip: index * POSTS_PER_PAGE,
        numOfPages,
        numOfPosts: numOfPostsPerPostListing,
        currentPage: index + 1,
      },
    });
  });
}

function createPosts(allPosts, createPage) {
  allPosts
    .forEach(({ node }) => {
      const blogPostTemplate = path.resolve('./src/templates/blog-post/index.tsx');
      createPage({
        path: node.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: node.fields.slug,
        },
      });
    });
}

function createProjects(allProjects, createPage) {
  allProjects
    .forEach(({ node }) => {
      const projectPageTemplate = path.resolve('./src/templates/project-page/index.tsx');
      createPage({
        path: node.fields.slug,
        component: projectPageTemplate,
        context: {
          slug: node.fields.slug,
        },
      });
    });
}

module.exports = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
        {
          allMdx(filter: {frontmatter: {draft: {ne: true}}}, limit: 500, sort: {fields: [frontmatter___date], order: DESC}) {
            edges {
            node {
              fields {
                slug
                contentType
              }
              frontmatter {
                tags
                category
              }
            }
            }
          }
        }
    `);

  if (result.errors) {
    throw result.errors;
  }

  const allPosts = result.data.allMdx.edges
    .filter(({ node }) => node.fields.contentType === 'post');
  const allProjects = result.data.allMdx.edges
    .filter(({ node }) => node.fields.contentType === 'project');

  createProjects(allProjects, createPage);
  createPosts(allPosts, createPage);

  const POSTS_PER_PAGE = 6;
  createPostListing(allPosts, POSTS_PER_PAGE, createPage);
  createPostListingByTags(allPosts, POSTS_PER_PAGE, createPage);
};
