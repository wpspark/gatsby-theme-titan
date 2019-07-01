import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from "gatsby"

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
            <aside  id="mySidenav" className="menu navbar-itemm sidenav">     
              <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a> 
              <ul className="menu-listt">
                
                {
                  data.allWordpressCategory.edges.map( ({node}) => (
                    node.count !== 0 ? 
                    <li>
                      <Link key={node.id} className={ active === node.slug ? 'navbar-itemm is-active' : 'navbar-itemm'} to={'/categories/' + node.slug} dangerouslySetInnerHTML={{__html:node.name}} />
                    </li>
                    : null 
                  ))
                }
              </ul> 
              
            </aside>
          )}
        />
      )
    }
}