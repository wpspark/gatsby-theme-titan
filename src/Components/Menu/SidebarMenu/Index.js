import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from "gatsby";
import {Aside} from './Style'

export default class CategoryMenu extends Component {
    state = { ready: false };

    closeNav = () => {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("mySidenav").style.marginRight= "0";
    }
    
    render() {
      const active = this.props.slug;
      
      return (
        <StaticQuery
          query={graphql`
            query CategoryMenu {
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
            <Aside  id="mySidenav" className="menu navbar-itemm sidenav">     
              <button className="closebtn" onClick={this.closeNav}>&times;</button> 
              <ul className="menu-listt">
                
                {
                  data.allWordpressCategory.edges.map( ({node}) => (
                    node.count !== 0 ? 
                    <li key={node.id}>
                      <Link 
                      className={ active === node.slug ? 'navbar-itemm is-active' : 'navbar-itemm'} 
                      to={`/categories/${node.slug}`} 
                      dangerouslySetInnerHTML={{__html:node.name}} 
                      />
                    </li>
                    : null 
                  ))
                }
              </ul> 
              
            </Aside>
          )}
        />
      )
    }
}