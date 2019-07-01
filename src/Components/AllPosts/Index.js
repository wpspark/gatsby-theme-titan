import React, { Component } from 'react'
import PostCard from './PostCard'
export default class AllPost extends Component {

    render() {
      let data = this.props.data;
      return (
        <section className="container">
          <div className="hero-body">
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
        </section>
      )
    }
}