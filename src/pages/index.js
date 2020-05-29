import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to the Learn Teach Center!</h1>
    <p>Learners will have teachers and teachers will have learners.</p>
    <p>Learning is a lifelong process.</p>
    <p>Learn to know, learn to do, learn to be, and learn to learn.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
