import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import MainMenu from "../Menu/MainMenu"
import MobileMenu from '../Menu/MobileMenu/Index'
import Styled from 'styled-components'
import { DarkTheme } from '../../Utils/GlobalStyle';
export default class Header extends Component {
  
    state = {
      headDarkMode: '',
    }
  
    toggleDropdownMenu = () => {
      document.getElementById('MainsiteNav').classList.toggle('is-active');
    }

    componentDidMount = () => {
      // let passedDarkMode = this.props.headerDarkMode;
      // console.log(passedDarkMode);
      // if(localStorageDarkModeStatus != null){
      //   this.setState({
      //     headDarkMode: localStorageDarkModeStatus
      //   })
      // }
    }

    componentWillReceiveProps= () => {
      // let darkModeState = this.props.headerDarkMode;
      // console.log('will receive props', darkModeState);
      // this.setState({
      //   headDarkMode: darkModeState
      // })
    }
    

    render() {
      let wordpressSiteMetadata = this.props.wordpressSiteMetadata;
      let headDarkModeStatus = this.props.headerDarkMode;

      const NavWrapper = Styled.div`
        .navbar{
          background-color: ${props => props.theme.headerBg};
          box-shadow:none;
        }
        .title-in-dark-mode{
          color: ${props => props.theme.title};
          font-weight:800;
          font-size: 22px;
        }
      `
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

                    <div className="theme-switcher">
                      <button className="button" onClick={this.props.toggleDarkMode}>Toggle Dark Mode</button>
                    </div>

                    
                  
                  </div>
                </nav>
              </NavWrapper>
            )
          }}
          />
      );
    }
}
