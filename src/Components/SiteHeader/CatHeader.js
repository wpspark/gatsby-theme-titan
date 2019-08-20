import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from "gatsby"
import CategoryMenu from "../Menu/SidebarMenu"
import Helmet from "react-helmet"

class catHeader extends Component {
    toggleDropdownMenu = () => {
      document.getElementById('MainsiteNav').classList.toggle('is-active');
    }
    toggleOffCanvasMenu = () => {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("mySidenav").style.marginRight = "250px";
    }
    
    render() {
      
      const zindexUp = {
          position:'fixed',
          zIndex:'2',
          padding:'25px',
          width:'100%'
      }
      
      return (
        <StaticQuery
          query={graphql`
          query sparkDataFromSite3 {
              sparkData {
                logo 
                favicon
              } 
            }
          `}
          render={data => {
            const { sparkData } = data;

            return (
              <nav role="navigation" >
                <Helmet
                  link={[
                    {
                      "rel": "icon",
                      "type": "image/png",
                      "href": sparkData.favicon
                    },
                    {
                      "rel": "stylesheet",
                      "href": 'https://fonts.googleapis.com/css?family=Muli:400,700,800&display=swap', 
                    }
                  ]}
                />

                <div className="navbar-menuu" style={zindexUp}>
                  <Link to="/" className="navbar-itemm" >
                    <button className="button">Home</button>
                  </Link>
                  <button className="button is-pulled-right" onClick={this.toggleOffCanvasMenu}>Menu</button>
                </div>

                {
                  this.props.title
                  ? 
                  <div className="category-title">
                      <h2 className="title is-2" dangerouslySetInnerHTML={{__html:this.props.title}}></h2>
                      <p>Posts : {this.props.data.edges.length}</p>
                  </div>
                  : 
                  null
                }
                
                <div className="navbar-start">
                  <CategoryMenu slug={this.props.slug} />
                </div>
                
                
                
                
              </nav>
            )
          }}
          />
      );
    }
}

export default catHeader;