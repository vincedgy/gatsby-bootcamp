module.exports = {
  siteMetadata: {
    title: `Vincent's Gatsby site`,
    description: `This is my first time with Gatswby !`,
    author: `Vincent DAGOURY`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            },
          },
        ],
      },
    },
  ],
}
