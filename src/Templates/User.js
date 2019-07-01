import React, { Component } from 'react'
import { graphql} from "gatsby"
import Layout from "../Layouts/UserIndex"
import SEO from "../Utils/SEO"
import PostCard from "../Components/AllPosts/PostCard"
import UserInfo from '../Components/PageTitle/User'

// import Header from '../components/siteHeader/postHeader'
// import PostAuthor from "../components/post-author/index"
// import { DiscussionEmbed } from "disqus-react";

class UserTemplate extends Component {
    filterExcerpt = (excerpt) => {
        if( new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(excerpt) ) {
          // let reg = /<a\s*(.*)\>(.*)<\/a>/g;
          let reg = /<a\b[^>]*>(.*?)<\/a>/g;
  
          let filterText = excerpt.replace(reg, "");
          return filterText;
        }else{
          return excerpt;
        }
    }
    render() {
        const data = this.props.data.allWordpressWpUsers.edges[0].node.authored_wordpress__POST;
        const user = this.props.pageContext.userData;
        

        return (
                <Layout wordpressSiteMetadata={this.props.pageContext.wordpressSiteMetadata} title={user.name} data={this.props.pageContext.userData}>
                    
                    <SEO title={user.name} />

                    <UserInfo data={user}/>

                    {/* <section className="container">
                        <div className="hero-body">
                            <div className="columns is-multiline is-1-mobile is-justified-center">
                            {
                                data.map( (node, index) => {
                                return (
                                    <div key={index} className='column is-four-fifths'>
                                    <PostCard cardData={node.node}/>
                                    </div>
                                )
                                })
                            }
                            </div>
                        </div>
                    </section> */}

                    <section className="container">
                        <div className="hero-body">
                            <div className="columns is-multiline is-1-mobile is-justified-center">

                                {
                                    data
                                    ?
                                    data.map( (post, index) => 
                                        <div key={index} className='column is-four-fifths'>
                                            <PostCard cardData={post}/>
                                            
                                        </div>    
                                    )
                                    : <p>No Post for this Author</p>
                                }

                            </div>
                        </div>
                    </section>


                </Layout>
        )
    }
}

export default UserTemplate;

export const UserPostQuery = graphql`
    query UsersPostQuery($id: String!){
        allWordpressWpUsers(filter:{
            id:{
                eq: $id
            }
        }){
            edges{
                node{
                    id
                    wordpress_id
                    name
                    description
                    slug
                    avatar_urls {
                        wordpress_96
                    }
                    authored_wordpress__POST{
                        id
                        title
                        wordpress_id
                        excerpt
                        slug
                        date(formatString: "MMMM DD, YYYY")
                        categories{
                            id
                            name
                            slug
                            link
                        }
                        spark_media
                        author {
                            id
                            name
                            slug
                            avatar_urls{
                                wordpress_96
                            }
                        }
                    }
                }
            }
        }
    }
`