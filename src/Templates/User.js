import React, { Component } from 'react'
import { graphql} from "gatsby"
import Layout from "../Layouts/Index"
import SEO from "../Utils/SEO"
import UserInfo from '../Components/PageTitle/User/Index'
import UserAllPosts from '../Components/UserAllPosts/Index';

class UserTemplate extends Component {
    filterExcerpt = (excerpt) => {
        if( new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(excerpt) ) {
          let reg = /<a\b[^>]*>(.*?)<\/a>/g;
          let filterText = excerpt.replace(reg, "");
          return filterText;
        }else{
          return excerpt;
        }
    }
    render() {
        const data = this.props.data.allWordpressWpUserdata.edges[0].node.authored_wordpress__POST;
        const user = this.props.pageContext.userData;
        

        return (
                <Layout wordpressSiteMetadata={this.props.pageContext.wordpressSiteMetadata} title={user.name} data={this.props.pageContext.userData}>
                    
                    <SEO title={user.name} />

                    <UserInfo data={user}/>

                    <UserAllPosts
                        data = {data}
                    />

                </Layout>
        )
    }
}

export default UserTemplate;

export const UserPostQuery = graphql`
    query UsersPostQuery($id: String!){
        allWordpressWpUserdata(filter:{
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
                        content
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