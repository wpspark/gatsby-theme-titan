import React, { Component } from 'react'
import { DiscussionEmbed } from "disqus-react";
import {CommnetWrapper} from './Style'

export class DiscussComment extends Component {
    render() {
        const disqusShortname = this.props.shortname;
        const disqusConfig = this.props.config
        return (
            <CommnetWrapper className="section">
                <div className="columns is-justified-center">
                    <div className="column is-5">
                        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                    </div>
                </div>
            </CommnetWrapper>
        )
    }
}

export default DiscussComment
