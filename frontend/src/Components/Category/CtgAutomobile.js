import React from 'react';
import "bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CtgAutomobile = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <div className='ctg-agriculture'>
                Home /  <span style={{ color: "red", cursor: "pointer" }}>AUTOMOBILE
                </span>
            </div>
            
            <Carousel responsive={responsive}>
            <div className='ctg-agriculture-main-div' >
                <div className='ctg-agriculture-main-div-card'>
                    <img style={{ width: "80%", height:"150px", borderRadius: "30px" }} src="https://cache.careers360.mobi/media/article_images/2022/10/6/Application-Of-Mathematics-In-Automobile-Industry.jpg" alt="error" />
                    <p style={{ textAlign:"center", padding: "15px 0px 0px 0px", fontWeight: "500" }}>
                        TITLE ONE
                    </p>
                </div>
            </div>
            <div className='ctg-agriculture-main-div' >
                <div className='ctg-agriculture-main-div-card'>
                    <img style={{ width: "80%",height:"150px", borderRadius: "30px" }} src="https://cache.careers360.mobi/media/article_images/2022/10/6/Application-Of-Mathematics-In-Automobile-Industry.jpg" alt="error" />
                    <p style={{ margin: "auto", padding: "15px 0px 0px 0px", fontWeight: "500" }}>
                        TITLE Two
                    </p>
                </div>
            </div>
            <div className='ctg-agriculture-main-div' >
                <div className='ctg-agriculture-main-div-card'>
                    <img style={{ width: "80%",height:"150px", borderRadius: "30px" }} src="https://cache.careers360.mobi/media/article_images/2022/10/6/Application-Of-Mathematics-In-Automobile-Industry.jpg" alt="error" />
                    <p style={{ margin: "auto", padding: "15px 0px 0px 0px", fontWeight: "500" }}>
                        TITLE Three
                    </p>
                </div>
            </div>
            <div className='ctg-agriculture-main-div' >
                <div className='ctg-agriculture-main-div-card'>
                    <img style={{ width: "80%",height:"150px", borderRadius: "30px" }} src="https://cache.careers360.mobi/media/article_images/2022/10/6/Application-Of-Mathematics-In-Automobile-Industry.jpg" alt="error" />
                    <p style={{ margin: "auto", padding: "15px 0px 0px 0px", fontWeight: "500" }}>
                        TITLE Four
                    </p>
                </div>
            </div>
            <div className='ctg-agriculture-main-div' >
                <div className='ctg-agriculture-main-div-card'>
                    <img style={{ width: "80%",height:"150px", borderRadius: "30px" }} src="https://cache.careers360.mobi/media/article_images/2022/10/6/Application-Of-Mathematics-In-Automobile-Industry.jpg" alt="error" />
                    <p style={{ margin: "auto", padding: "15px 0px 0px 0px", fontWeight: "500" }}>
                        TITLE Five
                    </p>
                </div>
            </div>
            <div className='ctg-agriculture-main-div' >
                <div className='ctg-agriculture-main-div-card'>
                    <img style={{ width: "80%",height:"150px", borderRadius: "30px" }} src="https://cache.careers360.mobi/media/article_images/2022/10/6/Application-Of-Mathematics-In-Automobile-Industry.jpg" alt="error" />
                    <p style={{ margin: "auto", padding: "15px 0px 0px 0px", fontWeight: "500" }}>
                        TITLE Six
                    </p>
                </div>
            </div>
            </Carousel>
        </>
    )
}

export default CtgAutomobile;
