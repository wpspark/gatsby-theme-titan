import React, { Component } from 'react'
import {Link} from 'gatsby';
import {PostMetaData} from './Style'

export class PostMeta extends Component {
    render() {
        const date = this.props.date;
        const readTime = this.props.readTime;
        const categories = this.props.categories;
        return (
            <PostMetaData className="post-meta has-text-grey-light is-uppercase">
                <time className="" dateTime={new Date(date).toLocaleDateString("en-US")}>{date}</time>
                <span className="dot-divider"></span>
                
                <span> {readTime ? readTime : '1 Min Read'} </span>
                <span className="dot-divider"></span>
                {categories && categories.map(
                    category => <Link key={category.id} to={'/categories/'+ category.slug}><span dangerouslySetInnerHTML={{__html:category.name + " "}} /></Link>
                )}
            </PostMetaData>
        )
    }
}

export default PostMeta
