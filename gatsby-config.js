module.exports = {
  siteMetadata: {
    title: 'Morgan Newman\'s Portfolio',
  },
  pathPrefix: '/src/portfolio',
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/portfolio`,
      },
    },

    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-manifest',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
