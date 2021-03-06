/* eslint @typescript-eslint/no-var-requires: 0 */
/* eslint @typescript-eslint/explicit-function-return-type: 0 */

const { uniq } = require('lodash');
const path = require('path');
const urlJoin = require('url-join');
const { getTagSlug } = require('../src/utils/slugs');

function createPostListingByTags(posts, postsPerPage, createPage) {
  let allTags = [];
  posts.forEach(({ frontmatter }) => {
    allTags = allTags.concat(frontmatter.tags);
  });
  const uniqueTags = uniq(allTags);

  uniqueTags.forEach((tag) => {
    const blogHasTag = ({ frontmatter: { tags } }) => {
      if (tags) {
        return tags.find((blogTag) => blogTag === tag);
      }
      return false;
    };
    const totalNumOfTaggedPosts = posts.filter(blogHasTag).length;
    const tagSlug = getTagSlug(tag);
    const numOfPagesPerTag = Math.ceil(totalNumOfTaggedPosts / postsPerPage);
    const tagPageTemplate = path.resolve('./src/templates/tag-page/index.tsx');

    Array.from({ length: numOfPagesPerTag }).forEach((_, index) => {
      createPage({
        path: urlJoin(tagSlug, `${index + 1}`),
        component: tagPageTemplate,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
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
    .forEach(({ fields: { slug }, frontmatter: { previous, next } }) => {
      const blogPostTemplate = path.resolve('./src/templates/blog-post/index.tsx');

      createPage({
        path: slug,
        component: blogPostTemplate,
        context: { slug, previous, next },
      });
    });
}

function createProjects(allProjects, createPage) {
  allProjects
    .forEach(({ fields }) => {
      const projectPageTemplate = path.resolve('./src/templates/project-page/index.tsx');
      createPage({
        path: fields.slug,
        component: projectPageTemplate,
        context: {
          slug: fields.slug,
        },
      });
    });
}

function getAllPosts(result) {
  return result.data.allMdx.nodes
    .filter(({ fields }) => fields.contentType === 'post');
}

function getAllProjects(result) {
  return result.data.allMdx.nodes
    .filter(({ fields }) => fields.contentType === 'project');
}

async function query(graphql) {
  return graphql(`
        {
          allMdx(filter: {frontmatter: {draft: {ne: true}}}, limit: 500, 
              sort: {fields: [frontmatter___date], order: DESC}) {
            nodes {
              fields {
                slug
                contentType
              }
              frontmatter {
                tags
                category
                next
                previous
              }
            }
          }
        }
    `);
}

module.exports = async ({ graphql, actions: { createPage } }) => {
  const result = await query(graphql);

  if (result.errors) {
    throw result.errors;
  }

  const posts = getAllPosts(result);
  const projects = getAllProjects(result);

  createProjects(projects, createPage);
  createPosts(posts, createPage);

  const POSTS_PER_PAGE = 6;
  createPostListing(posts, POSTS_PER_PAGE, createPage);
  createPostListingByTags(posts, POSTS_PER_PAGE, createPage);
};
