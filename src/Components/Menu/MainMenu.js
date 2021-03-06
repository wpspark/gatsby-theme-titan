import React, { Component } from 'react'
import {StaticQuery, Link, graphql} from 'gatsby'
import {MenuItems} from './Style'

export class MainMenu extends Component {
    render() {
        const active = this.props.slug;
        
        return (
            <StaticQuery
                query={graphql`
                    query MainMenu {
                        allWordpressCategory{
                            edges{
                                node{
                                    id
                                    wordpress_id
                                    slug
                                    name
                                    count
                                }
                            }
                        }
                    }
                `}
                render={data => (
                <MenuItems className="navbar-item is-hoverable">   
                    {/* <Link className="has-text-grey-light navbar-item" to={`/`}>Home</Link>           
                    <Link className="has-text-grey-light navbar-item" to={`/`}>Posts</Link>           
                    <Link className="has-text-grey-light navbar-item" to={`/categories/wp-onepager`}>Category</Link>           
                    <Link className="has-text-grey-light navbar-item" to={`/user/uzzal`}>Author</Link>           
                    <Link className="has-text-grey-light navbar-item" to={`/`}>Buy Theme</Link>            */}
                    {
                    data.allWordpressCategory.edges.map( ({node}) => (
                        node.count !== 0 ? 
                        <Link key={node.id} className={ active === node.slug ? 'has-text-grey-light navbar-item is-active' : 'has-text-grey-light navbar-item'} to={'/categories/' + node.slug} dangerouslySetInnerHTML={{__html:node.name}} />
                        : null 
                    ))
                    }
                </MenuItems>
                )}
            />
        )
    }
}

export default MainMenu
