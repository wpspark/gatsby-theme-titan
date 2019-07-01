import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import MainMenu from "../Menu/MainMenu"

// import Menu from "../siteMenu"
// import CategoryMenu from "../Menu/sidebarMenu"
// import logo from "../../images/wpspark-logo.png"


export default class Header extends Component {
    toggleDropdownMenu = () => {
      document.getElementById('MainsiteNav').classList.toggle('is-active');
    }
    toggleOffCanvasMenu = () => {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("mySidenav").style.marginRight = "250px";
    }

    render() {
      let wordpressSiteMetadata = this.props.wordpressSiteMetadata;
      

      return (
        <StaticQuery
          query={graphql`
          query sparkDataFromSite {
              sparkData {
                logo 
                favicon
              } 
            }
          `}
          render={data => {
            const { sparkData } = data;

            return (
              <nav className="navbar is-transparent has-shadow is-spaced is-fixe-top" role="navigation">
                <div className="container">
                  <Helmet
                    link={[
                      {
                        "rel": "icon",
                        "type": "image/png",
                        "href": sparkData.favicon, 
                      }, 
                      {
                        "rel": "stylesheet",
                        "href": 'https://fonts.googleapis.com/css?family=Muli:400,700,800&display=swap', 
                      }
                    ]}
                  />
                  {/* <Helmet>
                    <script src="/node_modules/jquery/dist/jquery.js"></script>
                  </Helmet> */}

                  <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                      {
                        sparkData.logo ? <img src={sparkData.logo} alt="" /> : wordpressSiteMetadata.name
                      }
                    </Link>
                    {/* <div className="menu">
                      <button className="button" onClick={this.toggleOffCanvasMenu}>Menu</button>
                      <div className="navbar-start">
                        <CategoryMenu slug={this.props.slug} />
                      </div>
                    </div> */}

                  </div>
                
                  <div className="navbar-menu">
                    <div className="navbar-start">
                      <MainMenu slug={this.props.slug} />
                    </div>
                  </div>

                  
                
                </div>
              </nav>
            )
          }}
          />
      );
    }
}
