module.exports = {
  // This is for my SEO
  siteMetadata: {
    title: 'Rique\'s blog',
    description: 'A default blog and study source for Gatsby js'
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      // Setting what type of layout I'd like to use for MDX
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js')
        }
      }
    }
  ]
}