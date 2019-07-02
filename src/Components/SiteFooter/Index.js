import React, { Component } from 'react'
import {FooterWrapper} from './Style'
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
	PinterestIcon,
} from 'react-share'

export default class Footer extends Component {
    
    render() {
      const {siteName, facebook, twitter, linkedin, pinterest} = this.props;
      return (
        <FooterWrapper>

          <div className="content has-text-centered has-text-grey">
            <p>
              Copyright @ <strong>{siteName ? siteName : "WpSpark"}</strong>. 
              This site is powered by <a rel="noopener noreferrer" href="https://wpspark.io" target="_blank">WpSpark</a>
            </p>
          </div>
          <div className="has-text-centered is-flex is-justified-center">
            <a rel="noopener noreferrer" href={facebook ? facebook : "https://facebook.com/themexpert"} className="p-0-10" target="_blank" > <FacebookIcon size={32} round={false} borderRadius={5}/> </a>
            <a rel="noopener noreferrer" href={twitter ? twitter : "https://twitter.com/themexpert"} className="p-0-10" target="_blank" > <TwitterIcon size={32} round={false} borderRadius={5}/> </a>
            <a rel="noopener noreferrer" href={linkedin ? linkedin : "https://linkedin.com/themexpert"} className="p-0-10" target="_blank" > <LinkedinIcon size={32} round={false} borderRadius={5}/> </a>
            <a rel="noopener noreferrer" href={pinterest ? pinterest : "https://pinterest.com/themexpert"} className="p-0-10" target="_blank" > <PinterestIcon size={32} round={false} borderRadius={5}/> </a>
          </div>
          
        </FooterWrapper>
      )
    }
}