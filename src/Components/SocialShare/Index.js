import React, { Component } from 'react'
import {SocialWrapper} from './Style'
import {
	FacebookShareButton,
	TwitterShareButton,
	LinkedinShareButton,
	TelegramShareButton,
	RedditShareButton,
	PinterestShareButton,
	FacebookIcon,
	TwitterIcon,
	LinkedinIcon,
	TelegramIcon,
	RedditIcon,
	PinterestIcon,
} from 'react-share';

export class SocialShare extends Component {
    render() {
        const {url, title, size, round, borderRadius, media} = this.props
        return (
            <SocialWrapper className="is-flex">
                
                <FacebookShareButton url={url} quote={title}>
                    <FacebookIcon size={size} round={round} borderRadius={borderRadius} />
                </FacebookShareButton>

                <TwitterShareButton url={url} title={title}>
                    <TwitterIcon size={size} round={round} borderRadius={borderRadius} />
                </TwitterShareButton>

                <PinterestShareButton url={url} description={title} media={media}>
                    <PinterestIcon size={size} round={round} borderRadius={borderRadius} />
                </PinterestShareButton>

                <LinkedinShareButton url={url} title={title}>
                    <LinkedinIcon size={size} round={round} borderRadius={borderRadius} />
                </LinkedinShareButton>

                <TelegramShareButton url={url} title={title}>
                    <TelegramIcon size={size} round={round} borderRadius={borderRadius} />
                </TelegramShareButton>

                <RedditShareButton url={url} title={title}>
                    <RedditIcon size={size} round={round} borderRadius={borderRadius} />
                </RedditShareButton>

            </SocialWrapper>
        )
    }
}

export default SocialShare
