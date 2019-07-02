import React, { Component } from 'react'
import { DiscussionEmbed } from "disqus-react";
import Layout from "../Layouts/Index"
import SEO from "../Utils/SEO"
import PostAuthor from "../Components/PostAuthor/Index"
import PostNavigation from "../Components/Post/Navigation/Index"
import SocialShare from '../Components/SocialShare/Index';
import PostHeader from '../Components/Post/Header/Index'
import PostContent from '../Components/Post/Content/Index'
import NewsLetter from '../Components/Newsletter/Index'

// import Header from '../components/siteHeader/postHeader'


class PostTemplate extends Component {

	constructor(props) {
		super(props);

		this.state = {
			base_url: process.env.baseUrl,
			featured_image: 'https://via.placeholder.com/600x320'
		}
	}
  
  render() {
		const data = this.props.pageContext.wordpressPost;
		const disqusShortname = this.props.pageContext.site.siteMetadata.disqusShortname;
		const prevPost = this.props.pageContext.prev
		const nextPost = this.props.pageContext.next
		const shareUrl = this.props.location.href;
		const disqusConfig = {
			identifier: data.id,
			title: data.title,
		};
    return (
			<Layout wordpressSiteMetadata={this.props.pageContext.wordpressSiteMetadata} featuredImage={data.spark_media} data={data}>
				
				<SEO title={data.title} />

				<section className="hero">
					<div className="hero-bodyy">
						<div className="container">

							<PostHeader data={data} />

							<div className="section hero-content">
								<div className="columns is-justified-center">
									<div className="column is-7">

										<PostContent data={data}/>

										<SocialShare
											url={shareUrl}
											title={data.title}
											size={32}
											round={false}
											borderRadius={5}
											media={data.spark_media}
										/>

										<PostAuthor data={data.author}/>

										<PostNavigation 
											prev={prevPost} 
											prevText='Previous Post' 
											next={nextPost} 
											nextText='Next Post'  
										/>

									</div>
								</div>
							</div>

						</div>
						
						<section className="section has-background-white-ter">
							<div className="columns is-justified-center">
								<div className="column is-5">
									<DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
								</div>
							</div>
						</section>

					</div>
				</section>

				<NewsLetter container={false}/>


			</Layout>
    )
  }
}

export default PostTemplate