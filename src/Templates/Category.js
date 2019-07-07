import React, { Component } from 'react'
import { graphql } from "gatsby"
import Layout from "../Layouts/Index"
import SEO from "../Utils/SEO"
import AllPost from "../Components/AllPosts/Index"
import CatInfo from '../Components/PageTitle/Category/Index'

class CategoryPage extends Component {
    
  render() {
    
    const category = this.props.pageContext.wordpressCategory;
    const currentCategoryPosts = this.props.data.allWordpressPost;
    
    return (
        <Layout wordpressSiteMetadata={this.props.pageContext.wordpressSiteMetadata} title={category.name} data={currentCategoryPosts}>
        
        	<SEO title="Category Page" titleTemplate={category.name} />

          <CatInfo data={category} />

        	<AllPost data={currentCategoryPosts.edges} />

        </Layout>
    )
  }
}

export default CategoryPage

export const categoryQuery = graphql`
  query currentCategoryQuery($slug: String!) {

    allWordpressPost(filter: {
        categories: {
            elemMatch: {
                slug: { eq: $slug }
            }
        }
    }) {
        edges{
            node{
                id
                title
                excerpt
                slug
                content
                date(formatString: "MMMM DD, YYYY")
                categories{
                    id
                    name
                    slug
                    link
                }
                author {
                  id
                  name
                  slug
                  avatar_urls{
                    wordpress_96
                  }
                }
                spark_media
            }
        }
    }
  }
`