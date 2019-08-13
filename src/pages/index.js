import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import usePosts from "../hooks/usePosts"
import PostPreview from "../components/postsPreview"

const IndexPage = () => {
  const posts = usePosts()
  
  return (
    <Layout>
      <SEO title="Home" />
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}

export default IndexPage
