import React from 'react';
// import {useState, useEffect} from "react";
// import axios from "axios";
import "bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CtgHardware = () => {

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
                Home /  <span style={{ color: "red", cursor: "pointer" }}>HARDWARE
                </span>
            </div>
            
            <Carousel responsive={responsive}>
            <div className='ctg-agriculture-main-div' >
                <div className='ctg-agriculture-main-div-card'>
                    <img style={{ width: "80%", height:"150px", borderRadius: "30px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3e9tPelC2R6v9BffSM3HzgXIi6lsINGqXHDeAOmaWyg&usqp=CAU&ec=48665699" alt="error" />
                    <p style={{ textAlign:"center", padding: "15px 0px 0px 0px", fontWeight: "500" }}>
                        TITLE ONE
                    </p>
                </div>
            </div>
            <div className='ctg-agriculture-main-div' >
                <div className='ctg-agriculture-main-div-card'>
                    <img style={{ width: "80%",height:"150px", borderRadius: "30px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3e9tPelC2R6v9BffSM3HzgXIi6lsINGqXHDeAOmaWyg&usqp=CAU&ec=48665699" alt="error" />
                    <p style={{ margin: "auto", padding: "15px 0px 0px 0px", fontWeight: "500" }}>
                        TITLE Two
                    </p>
                </div>
            </div>
            <div className='ctg-agriculture-main-div' >
                <div className='ctg-agriculture-main-div-card'>
                    <img style={{ width: "80%",height:"150px", borderRadius: "30px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3e9tPelC2R6v9BffSM3HzgXIi6lsINGqXHDeAOmaWyg&usqp=CAU&ec=48665699" alt="error" />
                    <p style={{ margin: "auto", padding: "15px 0px 0px 0px", fontWeight: "500" }}>
                        TITLE Three
                    </p>
                </div>
            </div>
            <div className='ctg-agriculture-main-div' >
                <div className='ctg-agriculture-main-div-card'>
                    <img style={{ width: "80%",height:"150px", borderRadius: "30px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3e9tPelC2R6v9BffSM3HzgXIi6lsINGqXHDeAOmaWyg&usqp=CAU&ec=48665699" alt="error" />
                    <p style={{ margin: "auto", padding: "15px 0px 0px 0px", fontWeight: "500" }}>
                        TITLE Four
                    </p>
                </div>
            </div>
            <div className='ctg-agriculture-main-div' >
                <div className='ctg-agriculture-main-div-card'>
                    <img style={{ width: "80%",height:"150px", borderRadius: "30px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3e9tPelC2R6v9BffSM3HzgXIi6lsINGqXHDeAOmaWyg&usqp=CAU&ec=48665699" alt="error" />
                    <p style={{ margin: "auto", padding: "15px 0px 0px 0px", fontWeight: "500" }}>
                        TITLE Five
                    </p>
                </div>
            </div>
            <div className='ctg-agriculture-main-div' >
                <div className='ctg-agriculture-main-div-card'>
                    <img style={{ width: "80%",height:"150px", borderRadius: "30px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3e9tPelC2R6v9BffSM3HzgXIi6lsINGqXHDeAOmaWyg&usqp=CAU&ec=48665699" alt="error" />
                    <p style={{ margin: "auto", padding: "15px 0px 0px 0px", fontWeight: "500" }}>
                        TITLE Six
                    </p>
                </div>
            </div>
            </Carousel>
        </>
    )
}

export default CtgHardware;
