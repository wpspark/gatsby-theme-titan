// import React, { Component } from 'react'
// import Layout from "../layouts"
// import SEO from "../utils/seo"
// import { graphql } from "gatsby"

// class PageTemplate extends Component {
  
//   render() {
//     const data = this.props.data.wordpressPage;

//     return (
//         <Layout wordpressSiteMetadata={this.props.pageContext.wordpressSiteMetadata}>
        	
//           	<SEO title={data.title} />

//           	<section className="hero">
// 			  	<div className="hero-body">
// 			    	<div className="container">
// 			    		<div className="section has-text-centered header">
// 				      		<h1 className="title" dangerouslySetInnerHTML={{__html:data.title}} />

//                   <div className="section hero-content">
//                     <div className="columns">
//                         <div className="column is-offset-1 is-10">
//   				      		      <div dangerouslySetInnerHTML={{ __html: data.content }} />
//                         </div>
//                     </div>
//                   </div>

// 			    		</div>

// 			    	</div>
// 			  	</div>
// 			</section>
			
//         </Layout>
//     )
//   }
// }

// export default PageTemplate

// export const pageQuery = graphql`
//   query($id: String!) {
//     wordpressPage(id: { eq: $id }) {
//       title
//       content
//       date(formatString: "MMMM DD, YYYY")

//     }
//   }
// `