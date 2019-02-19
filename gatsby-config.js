module.exports = {
    siteMetadata: {
        title: 'Ortmesh'
    },
    plugins: [
        `gatsby-plugin-emotion`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-autolink-headers`,
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            inlineCodeMarker: '>'
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'src',
                path: `${__dirname}/src`
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Ortmesh',
                short_name: "Ortmesh",
                start_url: '/',
                background_color: '#ffffff',
                theme_color: '#2185d0',
                display: 'standalone',
                icon: "src/images/logo.png",
                include_favicon: true
            }
        },
        `gatsby-plugin-offline`
    ]
};
