import React, { Component } from 'react'
import { Link } from "gatsby"
import {SinglePostCard} from './Style'
import readingTime from 'reading-time'
// const readingTime = require('reading-time');

export class PostCard extends Component {
    filterExcerpt = (excerpt) => {
        if( new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(excerpt) ) {
          let reg = /<a\b[^>]*>(.*?)<\/a>/g;
          let filterText = excerpt.replace(reg, "");
          return filterText;
        }else{
          return excerpt;
        }
    }
    render() {
        const post = this.props.cardData;
        const timeToRead = readingTime(post.content);
        return (
            <SinglePostCard className="cardd"> 

                <div className="card-image">
                    <img src={post.spark_media} alt=""/>
                </div>
                      
                <div className="card-content">
                    
                    <h4 className="title">
                        <Link to={`/post/${post.slug}`} dangerouslySetInnerHTML={{__html:post.title + " "}} />
                    </h4>
                    <p className="post-meta has-text-grey-light is-uppercase">
                        <time className="" dateTime={new Date(post.date).toLocaleDateString("en-US")}>{post.date}</time>
                        <span className="dot-divider"></span>
                        
                        <span> {timeToRead.text ? timeToRead.text : "0 Min Read"} </span>
                        <span className="dot-divider"></span>
                        {post.categories && post.categories.map(
                            category => <Link key={category.id} to={`/categories/${category.slug}`}><span dangerouslySetInnerHTML={{__html:category.name + " "}} /></Link>
                        )}
                        
                    </p>
                    <div className="post-excerpt has-text-grey-light-dark" style={{margin:'20px 0px 0px'}} dangerouslySetInnerHTML={{__html:this.filterExcerpt(post.excerpt)}}/>

                    <div className="card-footer post-meta has-text-grey-light is-space-between m-20-0 p-20-0 is-uppercase">
                        <div className="left is-flex is-align-center">
                            <div className="read-more is-flex is-align-center">
                                <span className="text-icon arrow-right"></span>
                                <Link to={`/post/${post.slug}`}>Read More</Link>
                            </div>
                            {/* <div className="read-later is-flex is-align-center p-0-10 m-0-10">
                                <span className="text-icon bookmark"></span>
                                <Link className="has-text-grey-darker" to={`/post/${post.slug}`}>Read Later</Link>
                            </div> */}
                        </div>
                        <div className="right is-capitalize">
                            <div className="user-wrapper is-flex is-align-center">
                                <figure className="image is-24x24 image-objectfit-contain" style={{margin:'0 auto'}}>
                                    <img className="is-rounded" width="24" height="24" 
                                        src={ post.author.avatar_urls.wordpress_96 } 
                                        alt={ post.author.name }
                                    />
                                </figure>
                                {/* <img className="is-rounded" width="30" height="30" src={post.author.avatar_urls.wordpress_96} alt=""/> */}
                                <p className="p-0-10 has-text-grey-light">
                                    <span>By: </span>
                                    <Link to={`/user/${post.author.slug}`}>{post.author.name}</Link>
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </SinglePostCard>
        )
    }
}

export default PostCard
