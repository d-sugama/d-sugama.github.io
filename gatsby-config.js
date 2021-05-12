/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `コード譜つくーる`,
    description: `コード譜くらいもう少し楽に作れんもんか、と思ったので Markdown 風な記法でコード譜作れるエディタ作りました。弾き語り用のカンペ作りやバンドメンバーへの共有用にどうぞ。`
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`
  ],
}
