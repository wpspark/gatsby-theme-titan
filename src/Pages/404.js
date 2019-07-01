import React, { Component } from 'react'
import { graphql } from "gatsby"
import Layout from "../Layouts/Index"
import SEO from "../Utils/SEO"

class NotFoundPage extends Component {
    
  render() {
    return (
			<Layout wordpressSiteMetadata={this.props.data.wordpressSiteMetadata}>
					<SEO title="Page not found" />
        	<section className="hero is-warning">
						<div className="hero-body">
								<h1 className="title">
									404
								</h1>
								<h2 className="subtitle">
									Page not found!
								</h2>
						</div>
					</section>
        </Layout>
    )
  }
}

export default NotFoundPage

export const categoryQuery = graphql`
  query wordpressSiteMetadata{

		wordpressSiteMetadata{
			name
			description
			url
			home
		}
    
  }
`