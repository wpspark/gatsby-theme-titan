import React, { Component } from 'react'
import PostCard from './PostCard'
import {MainBodyWrapper} from './Style'

export default class AllPost extends Component {

    render() {
      let data = this.props.data;
      return (
        <MainBodyWrapper>
          <div className="container hero-body">
            <div className="columns is-multiline is-1-mobile is-justified-center">
              {
                data.map( (node, index) => {
                  return (
                    <div key={index} className='column is-four-fifths'>
                      <PostCard cardData={node.node}/>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </MainBodyWrapper>
      )
    }
}