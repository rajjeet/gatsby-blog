const _ = require(`lodash`)
const path = require(`path`)
const LodashModuleReplacementPlugin = require(`lodash-webpack-plugin`)
const {createFilePath} = require(`gatsby-source-filesystem`);

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
                tag => `/tags/${_.kebabCase(tag)}/`
            );
            console.log(tagSlugs);
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
              tagSlugs
            }            
          }
        }
      }
    }
    `).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve(`./src/templates/blog-post.js`),
                context: {
                    slug: node.fields.slug
                }
            })
        });

        let tagSlugs = [];
        result.data.allMarkdownRemark.edges.forEach(({node}) => {
            tagSlugs = tagSlugs.concat(node.fields.tagSlugs);
        });

        _.uniq(tagSlugs).forEach(tagSlug => {
            createPage({
                path: tagSlug,
                component: path.resolve(`./src/templates/tag-page.js`),
                context: {
                    tagSlug: tagSlug
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
