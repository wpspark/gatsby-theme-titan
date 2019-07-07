import React, { Component } from 'react'
import {Link} from 'gatsby'
import {PostAuthorBox} from './Style'

export default class PostAuthor extends Component {
    
    render() {
      const data = this.props.data;
      return (
        
          data === undefined ? null : 
          <PostAuthorBox className="hero">

            <div className="media">

              <div className="media-left">
                <figure className="image is-64x64">
                    <img className="is-rounded" width="64" height="64" 
                      src={ data.avatar_urls.wordpress_96 } 
                      alt={ data.name }
                    />
                </figure>
              </div>

              <div className="media-content">
                <h4 className="title">
                  <Link to={'/user/' + data.slug} dangerouslySetInnerHTML={{__html:data.name + " "}} />
                </h4>
                <p className="description">{data.description ? data.description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"}</p>
              </div>

            </div>
            
          </PostAuthorBox>
        
      )
    }
}