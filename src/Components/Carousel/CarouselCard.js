import React, { Component } from 'react';
import {Link} from 'gatsby';

export class CarouselCard extends Component {
    render() {
        const data = this.props.data;
        const index = this.props.index;
        return (
            <div className=" item has-text-centered" key={index}>
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={data.spark_media} alt={data.slug}/>
                    </figure>
                    <div className="post-categories">
                        {
                            data.categories &&
                            <Link key={data.categories[0].id} to={`/categories/${data.categories[0].slug}`}>
                                <span dangerouslySetInnerHTML={{__html:data.categories[0].name + " "}} />
                            </Link>
                        }
                    </div>
                    
                </div>
                <div className="card-content">
                    <h2>
                        <Link to={`/post/${data.slug}`} dangerouslySetInnerHTML={{__html:data.title}} />
                    </h2>

                </div>
            </div>
        )
    }
}

export default CarouselCard;
