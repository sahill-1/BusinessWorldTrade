import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";
import "bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import FeaturedProduct from './FeaturedProduct';
const FeaturedProducts = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 4,

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

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const productList = data.map((item) => <FeaturedProduct key={item.id} name={item.title} url={item.image} desc={item.description} />)
    return (
        <div>
            <h1 className='my-3' style={{
                color: "#444444",
                fontSize: "40px",
                fontWeight: "700"
            }}>Featured Products</h1>
            <Carousel responsive={responsive}>
                {productList}
            </Carousel>
        </div>
    )
}

export default FeaturedProducts
