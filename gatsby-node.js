const _ = require(`lodash`);
const path = require(`path`);
const LodashModuleReplacementPlugin = require(`lodash-webpack-plugin`);
const {createFilePath} = require(`gatsby-source-filesystem`);
const getTagSlug = require('./src/utils/helperFunctions').getTagSlug;
const getCategorySlug = require('./src/utils/helperFunctions').getCategorySlug;

exports.onCreateNode = ({node, getNode, actions}) => {

    const {createNodeField} = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({node, getNode, basePath: `pages`});
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
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug              
            }
            frontmatter{
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

        // Blog posts
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

        // Tags
        let tags = [];
        result.data.allMarkdownRemark.edges.forEach(({node}) => {
            tags = tags.concat(node.frontmatter.tags);
        });

        _.uniq(tags).forEach(tag => {
            const tagSlug = getTagSlug(tag);
            let tagPageTemplate = path.resolve(`./src/templates/tag-page.js`);
            createPage({
                path: tagSlug,
                component: tagPageTemplate,
                context: {
                    tag: tag
                }
            });
        });

        // Category
        let categories = [];
        result.data.allMarkdownRemark.edges.forEach(({node}) => {
            categories = categories.concat(node.frontmatter.category);
        });

        _.uniq(categories).forEach(category => {
            const categorySlug = getCategorySlug(category);
            let categoryPageTemplate = path.resolve(`./src/templates/category-page.js`);
            createPage({
                path: categorySlug,
                component: categoryPageTemplate,
                context: {
                    category: category
                }
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
