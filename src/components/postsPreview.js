import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const ReadMore = styled.p`
  text-transform: uppercase;
  color: #2878ba;
  letter-spacing: 1px;
  font-weight: 500;
  text-decoration: none;
  font-size: 13px;
  transition: 0.3s color ease-in-out;
  margin-bottom: 2rem;

  &:hover {
    color: #5BA2DC;
  }
`

const Article = styled.article`
  margin: 2rem 0;
  border-bottom: 1px solid #eaeaea;
`;

const PostPreview = ({ post }) => (
  <Article>
    <h2>
      {" "}
      <Link to={post.slug}>{post.title} </Link>
    </h2>
    <p>{post.excerpt}</p>
    <Link to={post.slug}>
      <ReadMore>read &rarr;</ReadMore>
    </Link>
  </Article>
)

export default PostPreview
