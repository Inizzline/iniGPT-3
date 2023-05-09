import React, { Component } from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { slack, atlassian, dropbox, google, shopify } from "./import";
import "./BrandsSlider.css"

import Slider from 'react-slick';

class BrandsSlider extends Component {
  render() {
    const settings = {
      infinte: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      arrows: false
    }
    return (
        <div className="gpt__brand section__padding">
          <Slider {...settings}>
            <div>
              <img src={slack} alt="slack"/>
            </div>
            <div>
              <img src={atlassian} alt="atlassian"/>
            </div>
            <div>
              <img src={dropbox} alt="dropbox"/>
            </div>
            <div>
              <img src={google} alt="google"/>
            </div>
            <div>
              <img src={shopify} alt="shopify"/>
            </div>
            <div>
              <img src={slack} alt="slack"/>
            </div>
            <div>
              <img src={atlassian} alt="atlassian"/>
            </div>
            <div>
              <img src={dropbox} alt="dropbox"/>
            </div>
            <div>
              <img src={google} alt="google"/>
            </div>
            <div>
              <img src={shopify} alt="shopify"/>
            </div>
          </Slider>
        </div>
    )
  }
}

export default BrandsSlider;



// const Brands = () => {
//   return (
//     <div className="gpt__brand section__padding">
//       <div>
//         <img src={slack} alt="slack"/>
//       </div>
//       <div>
//         <img src={atlassian} alt="atlassian"/>
//       </div>
//       <div>
//         <img src={dropbox} alt="dropbox"/>
//       </div>
//       <div>
//         <img src={google} alt="google"/>
//       </div>
//       <div>
//         <img src={shopify} alt="shopify"/>
//       </div>
//     </div>
//   )
// }


