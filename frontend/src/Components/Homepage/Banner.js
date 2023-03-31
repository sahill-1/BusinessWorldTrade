import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../images/BWT1.jpeg";

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        
        <div className='Banner-Section'>
            <Slider {...settings}>
                <div>
                    <img src={banner} className="Banner-Section-Image" alt="Slide 1" />
                </div>
                <div>
                    <img src={banner} className="Banner-Section-Image" alt="Slide 2" />
                </div>
                <div>
                    <img src={banner} className="Banner-Section-Image" alt="Slide 3" />
                </div>
            </Slider>
        </div>
    )
}

export default Banner
