import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import MainMenu from "../Menu/MainMenu"
import MobileMenu from '../Menu/MobileMenu/Index'
// import { DarkTheme } from '../../Utils/GlobalStyle';
import {NavWrapper, ThemeSwitcher} from './Style'
export default class Header extends Component {
  
    state = {
      headDarkMode: '',
    }
  
    toggleDropdownMenu = () => {
      document.getElementById('MainsiteNav').classList.toggle('is-active');
    }

    render() {
      let wordpressSiteMetadata = this.props.wordpressSiteMetadata;
      let headDarkModeStatus = this.props.headerDarkMode;

      
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
              <NavWrapper>
                <nav className="navbar is-transparent is-spaced is-fixe-top" role="navigation">
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
                          sparkData.logo && (headDarkModeStatus === 'false')
                          ? <img src={sparkData.logo} alt="" /> 
                          : <h2 className="title-in-dark-mode">{wordpressSiteMetadata.name}</h2>
                        }
                      </Link>

                      <MobileMenu />

                    </div>
                  
                    <div className="navbar-menu">
                      <div className="navbar-start">
                        <MainMenu slug={this.props.slug} />
                      </div>
                    </div>

                    <ThemeSwitcher className="theme-switcher">
                      <button className="button" onClick={this.props.toggleDarkMode}>
                        { (headDarkModeStatus === 'true') ? 'Light' : 'Dark'}
                      </button>
                    </ThemeSwitcher>

                    
                  
                  </div>
                </nav>
              </NavWrapper>
            )
          }}
          />
      );
    }
}
