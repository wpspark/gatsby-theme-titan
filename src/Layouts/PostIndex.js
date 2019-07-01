import React, { Component } from 'react'
import Header from "../Components/SiteHeader/Index"
import Footer from "../Components/SiteFooter/Index"

import "../Utils/Typography"

class PostLayout extends Component {
  
  render() {
    return (
      <div className="wp-spark-app">

        <Header 
          slug={this.props.slug} 
          title={this.props.title} 
          wordpressSiteMetadata={this.props.wordpressSiteMetadata} 
          featuredImage={this.props.featuredImage} 
          data={this.props.data}
        />

      	<main>
	        <div className="container is-fluid common-spacing">
            {this.props.children}
          </div>
        </main>

        <Footer />
      </div>
    )
  }
}

export default PostLayout;

