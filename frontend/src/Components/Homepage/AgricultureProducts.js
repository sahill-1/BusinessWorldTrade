import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useNavigate } from "react-router-dom";

const AgricultureProducts = () => {
  const Agriculture = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5suxByklKliG7q8T7KVnPdJRQcIcjmnWZEg&usqp=CAU",
      soldBy: "Pankaj Kapoor",
      name: "Onion",
      description: "Wholeseller: Himachal Pradesh",
    },
    {
      img: "https://mynativeshop.com/wp-content/uploads/2020/12/Urad-Dal-White.jpg",
      soldBy: "Manoj Dosi",
      name: "Urad Dhulli",
      description: "Wholeseller: Jaipur, Rajasthan",
    },
    {
      img: "https://5.imimg.com/data5/SELLER/Default/2022/12/PF/XY/RD/181791155/basmati-rice.png",
      soldBy: "Vishal Tamoli",
      name: "Basmati Rice",
      description: "Retailer: Indore, M.P",
    },
    {
      img: "https://m.media-amazon.com/images/I/81FgVq3wBZL._AC_UF1000,1000_QL80_.jpg",
      soldBy: "Asif Shaikh",
      name: "Sesame Seed",
      description: "Wholeseller: Sangola Maharashtra",
    },
    {
      img: "https://i-invdn-com.investing.com/news/Cotton_800x533_L_1601398852.jpg",
      soldBy: "Ajay Verma",
      name: "Cotton",
      description: "Wholeseller: Aligarh, U.P",
    },
    {
      img: "https://s3.amazonaws.com/eit-planttoolbox-prod/media/images/Camellia_sinensis_05_VRYEYryfQp1j.jpg",
      soldBy: "Mangiram Goyal",
      name: "Tea",
      description: "Wholeseller: Agra",
    },
    {
      img: "https://5.imimg.com/data5/SELLER/Default/2021/6/AI/OH/EV/26605812/black-mustard-seeds-big.jpg",
      soldBy: "Harshit Mishra",
      name: "Mustard Seeds",
      description: "Wholeseller: Amethi, U.P",
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

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/getcategory"
        );
        setCategories(response.data);
        console.log("Fetched Categories:", response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1
        className="my-3"
        style={{
          color: "#444444",
          fontWeight: "700",
        }}
      >
        Agriculture Products
      </h1>
      <Carousel responsive={responsive}>
        {Agriculture.map((product) => (
          <div
            key={product.id}
            className="card"
            style={{
              borderRadius: "20px 20px 0px 0px",
              width: "85%",
              margin: "auto",
              boxShadow:
                "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            }}
          >
            <img
              style={{
                width: "80%",
                height: "220px",
                borderRadius: "20px",
                margin: "auto",
              }}
              className="product--image mt-4"
              src={product.img}
              alt={product.name}
            />
            <h2 style={{ fontSize: "24px", textAlign: "center" }}>
              {product.name}
            </h2>
            <p style={{ color: "gray", textAlign: "center" }}>
              Sold by: {product.soldBy}{" "}
            </p>
            <p style={{ textAlign: "center" }}>{product.description}</p>
            <p style={{ textAlign: "center" }}>
              <button
                style={{
                  marginBottom: "20px",
                  padding: "5px 10px",
                  borderRadius: "10px",
                  borderColor: "transparent",
                  boxShadow: "rgb(14,81,118) 0px 10px 10px -10px",
                  fontSize: "15px",
                }}
              >
                Get Enquiry
              </button>
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default AgricultureProducts;
