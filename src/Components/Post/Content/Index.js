import React, { Component } from 'react'
import {PostContentWrapper} from './Style'

export class PostContent extends Component {
    render() {
        const data = this.props.data;
        return (
            <PostContentWrapper className="post content is-medium" dangerouslySetInnerHTML={{__html:data.content}} />
        )
    }
}

export default PostContent;
