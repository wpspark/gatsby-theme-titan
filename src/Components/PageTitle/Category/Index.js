import React, { Component } from 'react'
import PageTitle from '../Index'
import {PageTitleWrapper} from '../Style'

export class CatInfo extends Component {

    render() {
        const data = this.props.data;
        return (
            <PageTitleWrapper className="has-text-centered">
                <div className="container hero-body">
                    <PageTitle title={data.name}/>
                    <p>Number of posts: {data.count}</p>
                </div>
            </PageTitleWrapper>
        )
    }
}

export default CatInfo
