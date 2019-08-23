const { uniq } = require('lodash');
const path = require('path');
const urlJoin = require('url-join');

const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const { createFilePath } = require('gatsby-source-filesystem');
const { getTagSlug } = require('./src/utils/helperFunctions');
const { getCategorySlug } = require('./src/utils/helperFunctions');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    let basePath;
    let contentType;
    let slug;
    let rawSlug;

    if (node.fileAbsolutePath.includes('src/pages/posts')) {
      basePath = 'pages/posts';
      contentType = 'post';
      rawSlug = createFilePath({ node, getNode, basePath });
      slug = rawSlug.substring(rawSlug.indexOf('/', 1), rawSlug.length);
    }

    if (node.fileAbsolutePath.includes('src/pages/projects')) {
      basePath = 'pages';
      contentType = 'project';
      slug = createFilePath({ node, getNode, basePath });
    }

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
    createNodeField({
      node,
      name: 'contentType',
      value: contentType,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
        {
          allMarkdownRemark(
            filter: {frontmatter: {draft: {ne: true}}},
            limit: 500,
            sort: { fields: [frontmatter___date], order: DESC }) {
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
    `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    const allPosts = result.data.allMarkdownRemark.edges
      .filter(({ node }) => node.fields.contentType === 'post');
    const allProjects = result.data.allMarkdownRemark.edges
      .filter(({ node }) => node.fields.contentType === 'project');

    allProjects
      .forEach(({ node }) => {
        const template = path.resolve('./src/templates/ProjectPage.js');
        createPage({
          path: node.fields.slug,
          component: template,
          context: {
            slug: node.fields.slug,
          },
        });
      });

    // Posts
    allPosts
      .forEach(({ node }) => {
        const blogPostTemplate = path.resolve('./src/templates/BlogPost.js');
        createPage({
          path: node.fields.slug,
          component: blogPostTemplate,
          context: {
            slug: node.fields.slug,
          },
        });
      });

    const POSTS_PER_PAGE = 5;
    // All Posts Listing
    const numOfPostsPerPostListing = allPosts.length;
    const numOfPages = Math.ceil(numOfPostsPerPostListing / POSTS_PER_PAGE);
    const postListingTemplate = path.resolve('./src/templates/BlogPostListing.js');
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
      const tagPageTemplate = path.resolve('./src/templates/TagPage.js');
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

    // Category
    let categories = [];
    allPosts.forEach(({ node }) => {
      categories = categories.concat(node.frontmatter.category);
    });

    uniq(categories).forEach((category) => {
      const categoryPosts = result.data.allMarkdownRemark.edges
        .filter(({ node }) => node.frontmatter.category === category);
      const categorySlug = getCategorySlug(category);
      const categoryPageTemplate = path.resolve('./src/templates/CategoryPage.js');
      const totalNumOfPostsPerCategory = categoryPosts.length;
      const numOfPagesPerCategory = Math.ceil(totalNumOfPostsPerCategory / POSTS_PER_PAGE);
      Array.from({ length: numOfPagesPerCategory }).forEach((_, index) => {
        createPage({
          path: urlJoin(categorySlug, `${index + 1}`),
          component: categoryPageTemplate,
          context: {
            limit: POSTS_PER_PAGE,
            skip: index * POSTS_PER_PAGE,
            numOfPages: numOfPagesPerCategory,
            numOfPosts: totalNumOfPostsPerCategory,
            currentPage: index + 1,
            category,
            paginationSlug: categorySlug,
          },
        });
      });
    });
  });
};

// Sass and Lodash.
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      plugins: [new LodashModuleReplacementPlugin()],
    });
  }
};
