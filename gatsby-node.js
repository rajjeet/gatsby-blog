const _ = require(`lodash`);
const path = require(`path`);
const urlJoin = require('url-join');
const LodashModuleReplacementPlugin = require(`lodash-webpack-plugin`);
const {createFilePath} = require(`gatsby-source-filesystem`);
const getTagSlug = require('./src/utils/helperFunctions').getTagSlug;
const getCategorySlug = require('./src/utils/helperFunctions').getCategorySlug;

exports.onCreateNode = ({node, getNode, actions}) => {

    const {createNodeField} = actions;

    if (node.internal.type === `MarkdownRemark`) {
        let basePath, contentType, slug, rawSlug;

        if (node.fileAbsolutePath.includes('src/pages/posts')) {
            basePath = 'pages/posts';
            contentType = 'post';
            rawSlug = createFilePath({node, getNode, basePath: basePath});
            slug = rawSlug.substring(rawSlug.indexOf('/', 1), rawSlug.length);
        }

        if (node.fileAbsolutePath.includes('src/pages/projects')) {
            basePath = 'pages/projects';
            contentType = 'project';
            slug = createFilePath({node, getNode, basePath: basePath});
        }

        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });
        createNodeField({
            node,
            name: 'contentType',
            value: contentType
        })
    }
};

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;

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
    `).then(result => {

        if (result.errors) {
            throw result.errors
        }

        // Posts
        const allPosts = result.data.allMarkdownRemark.edges
            .filter(({node}) => node.fields.contentType === 'post');
        allPosts
            .forEach(({node}) => {
                let blogPostTemplate = path.resolve(`./src/templates/blog-post.js`);
                createPage({
                    path: node.fields.slug,
                    component: blogPostTemplate,
                    context: {
                        slug: node.fields.slug
                    }
                })
            });

        // All Posts Listing
        const postsPerPage = 5;
        let numOfPosts = allPosts.length;
        const numOfPages = Math.ceil(numOfPosts / postsPerPage);
        let blogPostListTemplate = path.resolve(`./src/templates/blog-post-listings.js`);
        Array.from({length: numOfPages}).forEach((_, index) => {
            createPage({
                path: urlJoin('blog', `${index + 1}`),
                component: blogPostListTemplate,
                context: {
                    limit: postsPerPage,
                    skip: index * postsPerPage,
                    numOfPages,
                    numOfPosts,
                    currentPage: index + 1
                }
            })
        });

        // Tags
        let tags = [];
        allPosts.forEach(({node}) => {
            tags = tags.concat(node.frontmatter.tags);
        });
        const uniqueTags = _.uniq(tags);
        uniqueTags.forEach(tag => {
            const tagSlug = getTagSlug(tag);
            const tagPosts = result.data.allMarkdownRemark.edges
                .filter(({node}) => node.frontmatter.tags && node.frontmatter.tags.find(blogTag => blogTag === tag));
            const postsPerPage = 5;
            let numOfPosts = tagPosts.length;
            const numOfPages = Math.ceil(numOfPosts / postsPerPage);
            let blogPostListTemplate = path.resolve(`./src/templates/tag-page.js`);
            Array.from({length: numOfPages}).forEach((_, index) => {
                createPage({
                    path: urlJoin(tagSlug, `${index + 1}`),
                    component: blogPostListTemplate,
                    context: {
                        limit: postsPerPage,
                        skip: index * postsPerPage,
                        numOfPages,
                        numOfPosts,
                        currentPage: index + 1,
                        tag: tag,
                        paginationSlug: tagSlug
                    }
                })
            });
        });

        // Category
        let categories = [];
        allPosts.forEach(({node}) => {
            categories = categories.concat(node.frontmatter.category);
        });

        _.uniq(categories).forEach(category => {
            const categoryPosts = result.data.allMarkdownRemark.edges
                .filter(({node}) => node.frontmatter.category === category);
            const postsPerPage = 5;
            const categorySlug = getCategorySlug(category);
            let categoryPageTemplate = path.resolve(`./src/templates/category-page.js`);
            let numOfPosts = categoryPosts.length;
            const numOfPages = Math.ceil(numOfPosts / postsPerPage);
            Array.from({length: numOfPages}).forEach((_, index) => {
                createPage({
                    path: urlJoin(categorySlug, `${index + 1}`),
                    component: categoryPageTemplate,
                    context: {
                        limit: postsPerPage,
                        skip: index * postsPerPage,
                        numOfPages,
                        numOfPosts,
                        currentPage: index + 1,
                        category: category,
                        paginationSlug: categorySlug
                    }
                })
            });
        });
    });
};


// Sass and Lodash.
exports.onCreateWebpackConfig = ({stage, actions}) => {
    switch (stage) {
        case `build-javascript`:
            actions.setWebpackConfig({
                plugins: [new LodashModuleReplacementPlugin()],
            })
    }
};
