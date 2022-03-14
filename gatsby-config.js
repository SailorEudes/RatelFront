/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    pathPrefix: `/`,
    siteMetadata: {
        title: "React Gatsby Technology & Blog Template",
        titleTemplate: `Ratelroche`,
        description: `Ratelroche is a Powerful & flexible Technology And Digital Software Gatsby Template. 06 Stunning Homepages are included in this template. You can use any template or mix content from different home pages for your website.`,
        author: `@Ratelroche`,
        twitterUsername: `@HasThemes`,
        image: "landing.png",
        siteUrl: "https://ratelroche.com/",
        canonical: "https://ratelroche.com/",
        getform: "https://getform.io/f/22b43bd4-29a7-4795-ba95-6abfe8bf1f39",
        copyright:
            "Ratelroche. Powered with <span style='color:red'>❤</span> by <a href='https://bearcub.fr/' target='_blank' rel='noopener noreferrer'>Bearcub</a>.",
        siteLanguage: "en",
        socials: [
            {
                id: 1,
                icon: "fab fa-facebook-f",
                link: "https://www.facebook.com/RatelRoche",
                title: "Facebook",
            },
            {
                id: 2,
                icon: "fab fa-twitter",
                link: "https://twitter.com/ratel_roche",
                title: "Twitter",
            },
            {
                id: 3,
                icon: "fab fa-instagram",
                link: "https://www.instagram.com/ratelroche/",
                title: "Instagram",
            },
            {
                id: 4,
                icon: "fab fa-linkedin",
                link: "https://www.linkedin.com/company/ratel-roche-associ%C3%A9s/about/",
                title: "Linkedin",
            },
        ],
        contact: {
            phone: "01 44 65 30 02",
            address: "25 rue Lepic, 75018, Paris",
            email: "antoine.jacoulet@ratelroche.com",
            website: "https://ratelroche.com/",
            rating: "4.9",
            customers: "700",
            clients: "3200",
        },
    },
    // mapping: {
    // 	"MarkdownRemark.frontmatter.author": `AuthorsJson.name`,
    // },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
        "gatsby-transformer-json",
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                excerpt_separator: `<!-- endexcerpt -->`,
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                ],
            },
        },
        {
            resolve: "gatsby-source-strapi",
            options: {
              apiURL: "https://rateladmin.herokuapp.com/api",
              collectionTypes: [
                "avis",
                "les-pluses",
                "news",
                "portfolios",
                "services",
                "stats",
              ],
              queryLimit: 1000,
            },
          },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `fonts`,
                path: `${__dirname}/src/assets/fonts`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Mitech",
                short_name: "mitech",
                theme_color: "#1B4962",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/",
                start_url: "/",
                icon: "src/assets/images/favicon.png",
                icons: [
                    {
                        src: "/icons/icon-72x72.png",
                        sizes: "72x72",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-96x96.png",
                        sizes: "96x96",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-128x128.png",
                        sizes: "128x128",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-144x144.png",
                        sizes: "144x144",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-152x152.png",
                        sizes: "152x152",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-384x384.png",
                        sizes: "384x384",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-breadcrumb`,
            options: {
                useAutoGen: true,
                autoGenHomeLabel: `Home`,
                exclude: [`/dev-404-page`, `/404`, `/404.html`],
                useClassNames: true,
            },
        },
        "gatsby-plugin-offline",
    ],
};
