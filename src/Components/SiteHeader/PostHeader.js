import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from "gatsby"
import CategoryMenu from "../Menu/sidebarMenu"
import Helmet from "react-helmet"

export default class postHeader extends Component {
    toggleDropdownMenu = () => {
      document.getElementById('MainsiteNav').classList.toggle('is-active');
    }
    toggleOffCanvasMenu = () => {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("mySidenav").style.marginRight = "250px";
    }
    
    render() {
      let authorImage = this.props.data;
      
      const zindexUp = {
          position:'fixed',
          zIndex:'2',
          padding:'25px',
          width:'100%'
      }
      const navCustomStyle = {
        position:'relative',
        background:`url(${this.props.featuredImage}) no-repeat`,
        backgroundSize:'cover',
        minHeight:'450px'
      };
      const absoluteDiv = {
          position:'absolute',
          width:'100%',
          height:'100%',
          top:'0',
          zIndex:'1',
      }
      const positionBottom = {
          position:'absolute',
          bottom:'50px',
          left:'0',
          right:'0',
      }



      return (
        <StaticQuery
          query={graphql`
          query sparkDataFromSite2 {
              sparkData {
                logo 
                favicon
              } 
            }
          `}
          render={data => {
            const { sparkData } = data;

            return (
              <nav  
              style = {! this.props.title ? navCustomStyle : null}
              className={! this.props.title ? 'navbarr is-transparent has-shadow is-spaced single-header' : ''} 
              role="navigation"
              >
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
                    {
                      authorImage.avatar_urls 
                      ?
                      <div className="is-inline-block">
                        <figure className="image is-96x96 image-objectfit-contain" style={{margin:'0 auto'}}>
                          <img className="is-rounded" width="96" height="96" 
                            src={ authorImage.avatar_urls.wordpress_96 } 
                            alt={ authorImage.name }
                          />
                        </figure>
                        <h2 className="title is-2" dangerouslySetInnerHTML={{__html:this.props.title}}></h2>
                      </div>
                      : 
                      <div>
                        <h2 className="title is-2" dangerouslySetInnerHTML={{__html:this.props.title}}></h2>
                        <p>Posts : {this.props.data.edges.length}</p>
                      </div>
                    }
                    
                  </div>
                  : 
                  null
                }
                
                <div className="navbar-start">
                  <CategoryMenu slug={this.props.slug} />
                </div>
                
                {
                ! this.props.title &&
                <section className="section" style={absoluteDiv}>
                  <div className="container column is-offset-2 is-8" style={positionBottom}>
                      <div className="column is-offset-2 is-8">
                          <h2 className="post-title title is-2 has-text-white" dangerouslySetInnerHTML={{__html:this.props.data.title}}></h2>
                          <p className="post-meta has-text-white">
                              <Link className="has-text-white" to={'user/'+this.props.data.author.slug}>{this.props.data.author.name}</Link>
                              <span className="sperator"> | </span>
                              <time dateTime={new Date(data.date).toLocaleDateString("en-US")}>{this.props.data.date}</time>
                          </p>
                      </div> 
                  </div>
                </section>
                }
                
                
              </nav>
            )
          }}
          />
      );
    }
}