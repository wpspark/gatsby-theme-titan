import React, { Component } from 'react'
import Header from "../Components/SiteHeader/Index"
import Footer from "../Components/SiteFooter/Index"
import "../Utils/Typography"

class MainLayout extends Component {
  
  render() {
    return (
      <div className="wp-spark-app">

        <Header slug={this.props.slug} wordpressSiteMetadata={this.props.wordpressSiteMetadata} />

      	<main>
	        <div className="page-wrapper">
            {this.props.children}
          </div>
        </main>

        <Footer 
          siteName="Spark"
          facebook="htts://facebook.com/themexpert"
          twitter="htts://twitter.com/themexpert"
          linkedin="htts://linkedin.com/themexpert"
          pinterest="htts://pinterest.com/themexpert"
        />
      </div>
    )
  }
}

export default MainLayout;

