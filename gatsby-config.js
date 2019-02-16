module.exports = {
    siteMetadata: {
        title: 'Ortmesh'
    },
    plugins: [
        `gatsby-plugin-emotion`,
        `gatsby-transformer-remark`,
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
                name: 'GatsbyJS',
                short_name: "GatsbyJS",
                start_url: '/',
                background_color: '#6b37bf',
                theme_color: '#6b37bf',
                display: 'standalone',
                icon: "src/images/icon.png"
            }
        },
        `gatsby-plugin-offline`
    ]
};
