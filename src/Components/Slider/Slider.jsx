import React from 'react';
import { Carousel } from "react-responsive-carousel";  
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner1 from "../../BannerImages/Banner1.jpg"
import Banner2 from "../../BannerImages/Banner2.jpg"
import Banner3 from "../../BannerImages/Banner3.jpg"
import Banner4 from "../../BannerImages/Banner4.jpg"
import Banner5 from "../../BannerImages/Banner5.jpg"
import Banner6 from "../../BannerImages/Banner6.jpg"
import styles from "./slider.module.css"
const Slider = () => {
    const Images=[Banner1,Banner2,Banner3,Banner4,Banner5,Banner6]





  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={2000}
        className={styles.slidercontainer}
      >
        {Images &&
          Images.map((Image) => (
            <div>
              <img src={Image} className={styles.slideImage} />
            </div>
          ))}

       
      </Carousel>
    </>
  );
}

export default Slider