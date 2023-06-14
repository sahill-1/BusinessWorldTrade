import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AgricultureProduct from "./AgricultureProduct";
const AgricultureProducts = () => {

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
  }, []);

  const productList = data.map((item) => <AgricultureProduct key={item.id} name={item.title} url={item.image} desc={item.description} />)
  return (
    <div>
      <h1 className='my-4' style={{
        color: "#444444",
        fontWeight: "700"
      }}>Agriculture Products</h1>
      <Carousel responsive={responsive}>
        {productList}
      </Carousel>
    </div>
  )
}

export default AgricultureProducts