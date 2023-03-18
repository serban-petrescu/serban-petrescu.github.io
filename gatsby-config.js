/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    plugins: [
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/content/media`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `education`,
                path: `${__dirname}/content/education`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `certification`,
                path: `${__dirname}/content/certification`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `work`,
                path: `${__dirname}/content/work`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `metadata`,
                path: `${__dirname}/content/metadata`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `project`,
                path: `${__dirname}/content/project`,
            },
        },
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    backgroundColor: `white`,
                    quality: 100
                }
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Șerban's Portfolio`,
                short_name: `Șerban's Portfolio`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#000000`,
                display: `minimal-ui`,
                icon: 'content/media/profile_relaxed_square.jpg'
            },
        },
        `gatsby-transformer-json`,
        `gatsby-plugin-sass`,
    ],
};
