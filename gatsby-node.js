const _ = require(`lodash`);
const path = require(`path`);
const LodashModuleReplacementPlugin = require(`lodash-webpack-plugin`);
const {createFilePath} = require(`gatsby-source-filesystem`);
const getTagSlug = require('./src/utils/helperFunctions').getTagSlug;
const getCategorySlug = require('./src/utils/helperFunctions').getCategorySlug;

exports.onCreateNode = ({node, getNode, actions}) => {

    const {createNodeField} = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({node, getNode, basePath: `pages/posts`});
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });

        if (node.frontmatter.tags) {
            const tagSlugs = node.frontmatter.tags.map(
                tag => getTagSlug(tag)
            );
            createNodeField({node, name: `tagSlugs`, value: tagSlugs})
        }

        if (node.frontmatter.category) {
            const categorySlug = getCategorySlug(node.frontmatter.category);
            createNodeField({node, name: `categorySlug`, value: categorySlug})
        }
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
        result.data.allMarkdownRemark.edges.forEach(({node}) => {
            let blogPostTemplate = path.resolve(`./src/templates/blog-post.js`);
            createPage({
                path: node.fields.slug,
                component: blogPostTemplate,
                context: {
                    slug: node.fields.slug
                }
            })
        });

        // All Posts List
        const allPosts = result.data.allMarkdownRemark.edges;
        const postsPerPage = 5;
        let numOfPosts = allPosts.length;
        const numOfPages = Math.ceil(numOfPosts / postsPerPage);
        let blogPostListTemplate = path.resolve(`./src/templates/blog-post-listings.js`);
        Array.from({length: numOfPages}).forEach((_, index) => {
            createPage({
                path: path.join('blog', `${index + 1}`),
                component: blogPostListTemplate,
                context: {
                    limit: postsPerPage,
                    skip: index * postsPerPage,
                    numOfPages,
                    numOfPosts,
                    currentPage: index + 1,
                }
            })
        });

        // Tags
        let tags = [];
        result.data.allMarkdownRemark.edges.forEach(({node}) => {
            tags = tags.concat(node.frontmatter.tags);
        });
        const uniqueTags = _.uniq(tags);
        uniqueTags.forEach(tag => {
            const tagSlug = getTagSlug(tag);
            const tagPosts = result.data.allMarkdownRemark.edges
                .filter(({node}) => node.frontmatter.tags.find(blogTag => blogTag === tag));
            const postsPerPage = 5;
            let numOfPosts = tagPosts.length;
            const numOfPages = Math.ceil(numOfPosts / postsPerPage);
            let blogPostListTemplate = path.resolve(`./src/templates/tag-page.js`);
            Array.from({length: numOfPages}).forEach((_, index) => {
                createPage({
                    path: path.join(tagSlug, `${index + 1}`),
                    component: blogPostListTemplate,
                    context: {
                        limit: postsPerPage,
                        skip: index * postsPerPage,
                        numOfPages,
                        numOfPosts,
                        currentPage: index + 1,
                        tag: tag
                    }
                })
            });
        });

        // Category
        let categories = [];
        result.data.allMarkdownRemark.edges.forEach(({node}) => {
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
                    path: path.join(categorySlug, `${index + 1}`),
                    component: categoryPageTemplate,
                    context: {
                        limit: postsPerPage,
                        skip: index * postsPerPage,
                        numOfPages,
                        numOfPosts,
                        currentPage: index + 1,
                        category: category
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
