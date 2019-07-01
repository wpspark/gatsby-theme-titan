import React, { Component } from 'react'
import PageTitle from '../Index'

export class UserInfo extends Component {

    render() {
        const author = this.props.data;
        return (
            <section className="container has-text-centered">
                <div className="hero-body">
                    <figure className="image is-96x96 image-objectfit-contain" style={{margin:'0 auto'}}>
                        <img className="is-rounded" width="96" height="96" 
                            src={ author.avatar_urls.wordpress_96 } 
                            alt={ author.name }
                        />
                    </figure>
                    <PageTitle title={author.name}/>
                    {/* <p>Number of posts: {author.authored_wordpress__POST.length}</p> */}
                    <p className="m-10-0">{author.description}</p>
                </div>
            </section>
        )
    }
}

export default UserInfo
