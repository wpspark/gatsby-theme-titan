import React, { Component } from 'react'
import { Link } from "gatsby"
import {PaginationWrapper} from "./Style"

export default class AllPostPagination extends Component {
    
    createTable = (pageCount) => {
      let children = []

      children.push(
        <li key="start-li">
          <Link className="pagination-link" aria-label={'Start'} to={'/'}>
            Start
          </Link>
        </li>
      )

      for (let i = 1; i <= pageCount; i++) {
        if(i > 5) break;
        children.push(
          <li key={i}>
            <Link className="pagination-link" aria-label={'Goto page' + i} to={'/' + (i > 1 ? 'posts/'+i : '')}>
            {i}
          </Link>
          </li>
        )
      }

      children.push(
        <li key="end-li">
          <Link className="pagination-link" aria-label={'End'} to={'/posts/' + (pageCount)}>
            End
          </Link>
        </li>
      )

      return children
    }

    render() {

      const next = this.props.next
      const prev = this.props.prev
      const pageCount = this.props.pageCount

      return (
        <PaginationWrapper className="section columns is-centered">
          <nav className="pagination is-half" role="navigation" aria-label="pagination">
            
            <ul className="pagination-list">
              <li>{prev && <Link className="button pagination-previous" to={prev}>Go to Previous Page</Link>}</li>
              {this.createTable(pageCount)}
              <li>{next && <Link className="button pagination-next" to={next}>Go to Next Page</Link>}</li>
            </ul>
            
          </nav>
        </PaginationWrapper>
      )
    }
}
