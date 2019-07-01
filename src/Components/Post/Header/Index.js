import React, { Component } from 'react';
import PostMeta from '../Meta/Index'
import FeaturedImage from '../FeaturedImage/Index';
import {PostHeaderWrapper} from './Style'

export class PostHeader extends Component {
    render() {
        const data = this.props.data
        return (
            <PostHeaderWrapper className="section has-text-centered header">
                <h1 className="title" dangerouslySetInnerHTML={{__html:data.title}} />
                <PostMeta
                    date={data.date}
                    readTime="1 Min Read"
                    categories={data.categories}
                />
                <FeaturedImage 
                    url={data.spark_media} 
                    name={data.title} 
                />
            </PostHeaderWrapper>
        )
    }
}

export default PostHeader;
