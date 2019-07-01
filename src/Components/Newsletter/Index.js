import React, { Component } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp';
// import './style.css';
import {NewsletterWrapper} from './Style'

export class NewsLetter extends Component {
    constructor(props){
        super(props)
        this.emailInput = React.createRef();
    }
    state ={
        result:"",
        message:""
    }
    // 1. via `.then`
    _handleSubmit = e => {
        e.preventDefault();
        const newsLetterMail = this.emailInput.current.value;
        // const otherFields = {};
        addToMailchimp(newsLetterMail)
            .then(data => {
                this.setState({
                    result: data.result,
                    message: data.msg
                })
                console.log(data)
            })
            .catch((err) => {
                this.setState({
                    result: err.result,
                    message: err.msg
                })
                console.log(err.message)
            })
    }
    render() {
        const container = this.props.container === true ? this.props.container : false;
        return (
            <NewsletterWrapper className="newsletter-wrapper has-text-centered" background={this.props.background}>
                <div className={ container ? 'is-flex container is-justified-center' : null}>
                    <div className={ container ? 'column is-four-fifths has-background-light hero-body' : null }>
                        <h2 className="title">Subscribe to WpSpark</h2>
                        <p className="has-text-grey">Get the latest stuff delivered right to your inbox.</p>
                        {
                            (!this.state.result && !this.state.message)
                            ? 
                            <form onSubmit={this._handleSubmit} className="field has-addons is-justified-center">
                                <div className="control">
                                    <input className="input" type="email" ref={this.emailInput} placeholder="Write your email"/>
                                </div>
                                <div className="control">
                                    <button className="button is-info"> Add Me </button>
                                </div>
                            </form>
                            : 
                            <div className={this.state.result === 'success' ? "submit-message has-text-success" : "submit-message has-text-danger"}>
                                <span className="result">{this.state.result}</span> - <span className="msg">{this.state.message}</span>
                            </div>
                        }
                    </div>
                </div>
            </NewsletterWrapper>
            
        )
    }
}

export default NewsLetter;
