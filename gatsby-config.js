module.exports = {
  siteMetadata: {
    title: 'Takaya Kobayashi'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-svg',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/'
      }
    }
  ]
}
