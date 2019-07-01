import React, { Component } from 'react'
import {TitleWrapper} from './Style'

export class PageTitle extends Component {
    render() {
        const title = this.props.title;
        return (
            <TitleWrapper dangerouslySetInnerHTML={{__html:title}}/>
        )
    }
}

export default PageTitle;
