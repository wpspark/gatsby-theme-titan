import React, { Component } from 'react'
import PostCard from "../AllPosts/PostCard"
import {UserAllPostWrapper} from './Style'

export class UserAllPosts extends Component {
    render() {
        const data = this.props.data
        return (
            <UserAllPostWrapper className="">
                <div className="container hero-body">
                    <div className="columns is-multiline is-1-mobile is-justified-center">

                        {
                            data
                            ?
                            data.map( (post, index) => 
                                <div key={index} className='column is-four-fifths'>
                                    <PostCard cardData={post}/>
                                    
                                </div>    
                            )
                            : <p>No Post for this Author</p>
                        }

                    </div>
                </div>
            </UserAllPostWrapper>
        )
    }
}

export default UserAllPosts
