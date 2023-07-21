import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ApparelFashion from "./ApparelFashion";

const ApparelsFashions = () => {
  const ApparelFashions = [
    {
      img: "https://bonorganik.in/cdn/shop/products/7627_2_500x.jpg?v=1627569405",
      soldBy: "Ravinder",
      name: "T-Shirts(2-8 Yrs)",
      description: "Trader: Haryana",
    },
    {
      img: "https://i.pinimg.com/736x/ee/da/cb/eedacb83d58f174fea67c5cd81a62be9.jpg",
      soldBy: "Sudarshan",
      name: "Girl's Jeans(6-12Yrs)",
      description: "Wholeseller: Chennai",
    },
    {
      img: "https://img3.exportersindia.com/product_images/bc-full/2021/5/8725909/knitted-boys-shoes-1621458494-5828338.jpg",
      soldBy: "Dinesh kumar ",
      name: "Boy's Footwear",
      description: "Retailer: Gwalior",
    },
    {
      img: "https://www.lalqueriaonline.eu/2678422-large_default/mephisto-valden-marron.jpg",
      soldBy: "Amandeep",
      name: "Floater Sandals",
      description: "Wholeseller: Kanpur",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyyHltwil3jZ6dp4OW7CGJ3fDvUfsit49Vw&usqp=CAU",
      soldBy: "Ravinder",
      name: "Trackpants Tracksuits (3-9 Yrs)",
      description: "Wholeseller: Haryana",
    },
    {
      img: "https://5.imimg.com/data5/SELLER/Default/2021/9/DM/RV/YP/3776542/night-dress-shirts-and-trouser-men-s-night-suit-500x500.jpg",
      soldBy: "Tajinder singh",
      name: "Man's Night Suit ",
      description: "Wholeseller: Ludhiana",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const productList = ApparelFashions.map((item) => (
    <ApparelFashion
      key={item.id}
      name={item.name}
      img={item.img}
      soldBy={item.soldBy}
      desc={item.description}
    />
  ));
  return (
    <div>
      <h1
        className="my-3"
        style={{
          color: "#444444",
          fontWeight: "700",
        }}
      >
        Apparel & Fashion
      </h1>
      <Carousel responsive={responsive}>{productList}</Carousel>
    </div>
  );
};

export default ApparelsFashions;
