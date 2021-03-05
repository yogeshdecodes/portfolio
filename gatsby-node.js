const _ = require(`lodash`);
const path = require(`path`);
const { slash } = require(`gatsby-core-utils`);

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(
    `
      {
        allContentfulBlogPost(limit: 1000) {
          edges {
            node {
              slug
            }
          }
        }
        allContentfulPortfolioItem(limit: 1000) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog pages
    const blogPostTemplate = path.resolve(`./src/templates/blog-post.jsx`);
    _.each(result.data.allContentfulBlogPost.edges, (edge) => {
      createPage({
        path: `/blog/${edge.node.slug}/`,
        component: slash(blogPostTemplate),
        context: {
          slug: edge.node.slug,
        },
      });
    });
    // Create project pages
    const projectDetailTemplate = path.resolve(
      `./src/templates/project-detail.jsx`
    );
    _.each(result.data.allContentfulPortfolioItem.edges, (edge) => {
      createPage({
        path: `/project/${edge.node.slug}/`,
        component: slash(projectDetailTemplate),
        context: {
          slug: edge.node.slug,
        },
      });
    });
  });
};
