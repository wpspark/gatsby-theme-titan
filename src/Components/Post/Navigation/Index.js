import React, { Component } from 'react'
import {Link} from "gatsby"
import {PostNavigationWrapper} from "./Style"

export class PostNavigation extends Component {
    render() {
        const prevPost = this.props.prev;
        const prevText = this.props.prevText;
		const nextPost = this.props.next;
		const nextText = this.props.nextText;
        return (
            <PostNavigationWrapper className="single-post-pagination is-flex" style={{justifyContent: "space-between"}}>
                {
                    prevPost && 
                    <Link to={`/post/${prevPost}`} className="has-text-grey button post-left" >
                        {prevText ? prevText : "Previous Post"}
                    </Link> 
                }
                {
                    nextPost && 
                    <Link to={`/post/${nextPost}`} className="has-text-grey button post-right" >
                        {nextText ? nextText : "Next Post"}
                    </Link> 
                }
            </PostNavigationWrapper>
        )
    }
}

export default PostNavigation
