import React, { Component } from 'react'
import Header from "../Components/SiteHeader/Index"
import Footer from "../Components/SiteFooter/Index"
import "../Utils/Typography"

class MainLayout extends Component {

  state={
    darkMode: ''
  }
  componentDidMount(){
    /**
     * set local state 
     * mode from localStorage
     */

    let localStorageDarkModeStatus = localStorage.getItem('dark-mode-status');
    console.log(typeof(localStorageDarkModeStatus), localStorageDarkModeStatus);
    /**
     * if dark mode value is in local storage 
     * then set state value to 
     * according to localstate
     */
    if( localStorageDarkModeStatus != null ){
      this.setState({
        darkMode: localStorageDarkModeStatus
      })
    }
    
  }

  ToggleDarkMode = () => {
    /**
     * this function only responsible 
     * toggle the status of dark mode.
     * at first it will check if there is any value in localstate
     * if not then set a dark mode status to true 
     * otherwise set the the dark mode status to opposite of localstorage
     */
    let localStorageDarkModeStatus = localStorage.getItem('dark-mode-status');
    
    if ( localStorageDarkModeStatus != null ) {
      let setNewDarkModeStatus = localStorageDarkModeStatus === 'true' ? 'false' : 'true';
      /**
       * set the opposite value 
       * to the state
       */
      this.setState({
        darkMode: setNewDarkModeStatus
      })
      /**
       * now set the new value to localStorage
       */
      localStorage.setItem('dark-mode-status', setNewDarkModeStatus)
    } else {
      localStorage.setItem('dark-mode-status', 'true')
    }
    
  }
  
  render() {
    return (
      <div className="wp-spark-app">

        <Header slug={this.props.slug} wordpressSiteMetadata={this.props.wordpressSiteMetadata} toggleDarkMode={this.ToggleDarkMode} />

      	<main>
	        <div className="page-wrapper">
            {this.props.children}
          </div>
        </main>

        <Footer 
          siteName="Spark"
          facebook="htts://facebook.com/themexpert"
          twitter="htts://twitter.com/themexpert"
          linkedin="htts://linkedin.com/themexpert"
          pinterest="htts://pinterest.com/themexpert"
        />
      </div>
    )
  }
}

export default MainLayout;

