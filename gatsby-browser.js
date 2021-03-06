/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// exports.onInitialClientRender = () => {
// //PASTE THE SNIPPET CODE HERE AND REMOVE THE 'BEGINNING OF and END OF TAWK.TO SNIPPET COMMENTS'
// }

//persist last known scrolling positions and scrolling back
//using api https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#shouldUpdateScroll
exports.shouldUpdateScroll = ({ routerProps }) => {
  const hasAnchor = !!routerProps.location.hash; 
  return hasAnchor
}
