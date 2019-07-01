import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CarouselCard from './CarouselCard';
import {CarouselWrapper} from './Style';


export class Carousel extends Component {
    state= {
        responsive:{},
    }
    componentDidMount(){
        const desktop = this.props.desktop ? this.props.desktop : 4;
        const tablet = this.props.tablet ? this.props.tablet : 2;
        const mobile = this.props.mobile ? this.props.mobile : 1;
        this.setState({
            responsive:{
                0: {
                    items: mobile,
                },
                768: {
                    items: tablet,
                },
                1000:{
                    item: desktop
                }
            }
        })
    }
    
    render() {
        const posts = this.props.posts;
        const column = this.props.column ? this.props.column : 4;
        const gap = this.props.gap ? this.props.gap : 10;
        const loop = this.props.loop === false ? this.props.loop : true;
        const dots = this.props.dots === false ? this.props.dots : true;
        const nav = this.props.nav === false ? this.props.nav : true;
        const autoPlay = this.props.autoPlay === false ? this.props.autoPlay : true;
        return (
            <CarouselWrapper className="container">
                <div className="hero-body">
                    <div className="columns is-multiline is-1-mobile is-justified-center">
                        <OwlCarousel
                            className="owl-theme"
                            loop={loop}
                            margin={gap}
                            nav={nav}
                            dots={dots}
                            items={column}
                            autoplay={autoPlay}
                            responsive={this.state.responsive}
                        >
                            {
                                posts.edges.map( (item, index) => {
                                    return(
                                        <CarouselCard data={item.node} index={index} key={`item${index}`}/>
                                    )
                                    
                                } )
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </CarouselWrapper>
            
        )
    }
}

export default Carousel
