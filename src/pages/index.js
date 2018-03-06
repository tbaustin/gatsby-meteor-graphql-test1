import React from 'react';
import Link from 'gatsby-link';

const IndexPage = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <h2>Index</h2>
    {data.allMarkdownRemark.edges.map(post => (
      <div>
        <Link key={post.node.id} to={post.node.frontmatter.path}>
          {post.node.frontmatter.title}
        </Link>
      </div>
    ))}
  </div>
);

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            published
          }
        }
      }
    }
  }
`;

export default IndexPage;
