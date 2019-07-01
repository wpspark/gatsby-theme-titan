import React, { Component } from 'react'
import {PostImage} from './Style'

export class FeaturedImage extends Component {
    render() {
        const src = this.props.url;
        const name = this.props.name;
        return (
            src &&
            <PostImage className="image column is-four-fifths">
                <img src={src} alt={name} />
            </PostImage>
        )
    }
}

export default FeaturedImage
