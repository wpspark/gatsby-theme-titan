import React, { Component } from 'react'
import PageTitle from '../Index'


export class CatInfo extends Component {

    render() {
        const data = this.props.data;
        return (
            <section className="container has-text-centered">
                <div className="hero-body">
                    <PageTitle title={data.name}/>
                    <p>Number of posts: {data.count}</p>
                </div>
            </section>
        )
    }
}

export default CatInfo
