/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
exports.onRouteUpdateDelayed = () => {
  console.log("We can show loading indicator now")
}


// exports.onInitialClientRender = () => {
//     let $;
//     if (typeof window !== `undefined`) {
//       $ = require("jquery");
//     }
//     $(document).ready(function($){
//       $('.owl-carousel').owlCarousel();
//     });
// }