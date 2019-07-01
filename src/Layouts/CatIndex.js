import React, { Component } from 'react'
import Header from "../Components/SiteHeader/Index"
import Footer from "../Components/SiteFooter/Index"

import "../Utils/Typography"

class CatLayout extends Component {
  
  render() {
    return (
      <div className="wp-spark-app">

        <Header 
          title={this.props.title} 
          data={this.props.data}
          wordpressSiteMetadata={this.props.wordpressSiteMetadata} 
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

export default CatLayout;

