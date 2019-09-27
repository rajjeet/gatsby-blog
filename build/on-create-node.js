/* eslint @typescript-eslint/no-var-requires: 0 */
/* eslint @typescript-eslint/explicit-function-return-type: 0 */
const { createFilePath } = require('gatsby-source-filesystem');

const CONTENT_TYPE_POST = 'post';
const CONTENT_TYPE_PROJECT = 'project';

exports.CONTENT_TYPE_POST = CONTENT_TYPE_POST;
exports.CONTENT_TYPE_PROJECT = CONTENT_TYPE_PROJECT;

module.exports = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    let basePath;
    let contentType;
    let slug;
    let rawSlug;

    if (node.fileAbsolutePath.includes('src/pages/posts')) {
      basePath = 'pages/posts';
      contentType = CONTENT_TYPE_POST;
      rawSlug = createFilePath({ node, getNode, basePath });
      slug = rawSlug.substring(rawSlug.indexOf('/', 1), rawSlug.length);
    }

    if (node.fileAbsolutePath.includes('src/pages/projects')) {
      basePath = 'pages/projects';
      contentType = CONTENT_TYPE_PROJECT;
      slug = createFilePath({ node, getNode, basePath });
    }

    createNodeField({ node, name: 'slug', value: slug });
    createNodeField({ node, name: 'contentType', value: contentType });
  }
};
