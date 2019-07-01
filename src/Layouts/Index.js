import React, { Component } from 'react'
import Header from "../Components/SiteHeader/Index"
import Footer from "../Components/SiteFooter/Index"
import NewsLetter from '../Components/Newsletter/Index'
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

        <NewsLetter container={true} />

        <Footer />
      </div>
    )
  }
}

export default MainLayout;

