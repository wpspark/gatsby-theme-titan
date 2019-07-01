import React, { Component } from 'react'
import { Link } from "gatsby"
import Layout from "../Layouts/Index"
import SEO from "../Utils/SEO"
import PageTitle from "../Components/PageTitle/Index"

class CategoriesArchivePage extends Component {
    
  render() {
    const allWordpressCategory = this.props.pageContext.allWordpressCategory;
    
    return (
      <Layout wordpressSiteMetadata={this.props.pageContext.wordpressSiteMetadata}>

        	<SEO title="Categories" />
          <PageTitle title="Categories" subtitle="Categories listing page" />

        	<section className="section columns">
            <nav className="panel column is-offset-4 is-4">
                {
                  allWordpressCategory.edges.map((node, index) => { 
                    return <Link key={index} className="panel-block" to={"/categories/" + node.node.slug} dangerouslySetInnerHTML={{__html:node.node.name + ' (' + node.node.count + ')'}} />
                  })
                }
            </nav>
          </section>

        </Layout>
    )
  }
}

export default CategoriesArchivePage;
