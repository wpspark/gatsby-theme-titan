import React, { Component } from 'react'
import Header from "../Components/SiteHeader/Index"
import Footer from "../Components/SiteFooter/Index"
import NewsLetter from '../Components/Newsletter/Index'
import "../Utils/Typography"

class UserLayout extends Component {
  
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

        <NewsLetter container={true} paddingTop="0px"/>


        <Footer />
      </div>
    )
  }
}

export default UserLayout;

