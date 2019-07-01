import React, { Component } from 'react'
import Layout from "../Layouts/Index"
import SEO from "../Utils/SEO"

class BlogPage extends Component {
    
  render() {
    return (
        <Layout>
        	<SEO title="Home" />
        	<h1>Blog Page - Index</h1>
        </Layout>
    )
  }
}

export default BlogPage