import React, { Component } from 'react'
import {graphql} from 'gatsby'
import Layout from "../Layouts/Index"
import AllPost from "../Components/AllPosts/Index"
import AllPostPagination from "../Components/Pagination/Index"
import SEO from "../Utils/SEO"
import Carousel from '../Components/Carousel/Index'

class BlogPage extends Component {

  render() {
    const allPosts = this.props.data.allWordpressPost
    const next = this.props.pageContext.next
    const prev = this.props.pageContext.prev
    const numberOfPostsPerPages = this.props.pageContext.numberOfPostsPages
    return (
        <Layout wordpressSiteMetadata={this.props.pageContext.wordpressSiteMetadata}>
        	
          <SEO title="Home" />

          <Carousel 
            posts = {this.props.pageContext.allPosts}
            desktop = {4}
            tablet = {2}
            mobile = {1}
            gap = {20}
            loop = {false}
            dots = {false}
            nav = {true}
            autoPlay = {false}
          />

        	<AllPost data={allPosts.edges}/>

          <AllPostPagination prev={prev} next={next} pageCount={numberOfPostsPerPages}/>

        </Layout>
    )
  }
}

export default BlogPage;


export const query = graphql`
  query PostQuery($limit: Int!, $skip: Int!) {
    allWordpressPost(
      sort: {
        fields: [date]
        order: DESC
      }
      limit: $limit
      skip: $skip
    ){
      edges {
        node{
          id
          wordpress_id
          title
          excerpt
          content
          slug
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
          tags {
            id
            name
            slug
          }
        }
      }
    }
  }
`