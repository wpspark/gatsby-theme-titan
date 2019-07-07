import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import MainMenu from "../Menu/MainMenu"
import MobileMenu from '../Menu/MobileMenu/Index'

export default class Header extends Component {
    toggleDropdownMenu = () => {
      document.getElementById('MainsiteNav').classList.toggle('is-active');
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

                    <MobileMenu />

                  </div>
                
                  <div className="navbar-menu">
                    <div className="navbar-start">
                      <MainMenu slug={this.props.slug} />
                    </div>
                  </div>

                  <div className="theme-switcher">
                    <button className="button" onClick={this.props.toggleDarkMode}>Toggle Dark Mode</button>
                  </div>

                  
                
                </div>
              </nav>
            )
          }}
          />
      );
    }
}
