module.exports = {
  siteMetadata: {
    title: `Vincent's Gatsby site`,
    description: `This is my first time with Gatswby !`,
    author: `Vincent DAGOURY`,
  },
  plugins: [
    `gatsby-plugin-sass`, 
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-filesystem',
      options : {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
],
}
