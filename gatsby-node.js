const _ = require(`lodash`);
const path = require(`path`);
const LodashModuleReplacementPlugin = require(`lodash-webpack-plugin`);
const {createFilePath} = require(`gatsby-source-filesystem`);

function getTagSlug(tag) {
    return `/tags/${_.kebabCase(tag)}/`;
}

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
            }            
          }
        }
      }
    }
    `).then(result => {

        if (result.errors) {
            throw result.errors
        }

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
