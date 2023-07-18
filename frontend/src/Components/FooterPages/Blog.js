import React, { useEffect } from "react";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import "./Blog.css";
import { Link } from "react-router-dom";
import { BlogData } from ".././BlogAssets/blogData/BlogData.js";

import {
  AiOutlineTags,
  AiOutlineClockCircle,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

// import { Link } from "react-router-dom";
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <MdNavigateNext className="icon" />
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <GrFormPrevious className="icon" />
      </button>
    </div>
  );
};
const Blog = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const category = [
    {
      id: 1,
      category: "Agriculture",
      title:
        "Cultivating the Future: Innovations And Challenges in Agriculture",
      cover: require(".././BlogAssets/blogImages/agriculture-01.jpg"),
    },
    {
      id: 2,
      category: "Apparel And Fashion",
      title: "Fashion Fusion:Where Trends Collide",
      cover: require(".././BlogAssets/blogImages/apparel and fashion-01.jpg"),
    },
    {
      id: 3,
      category: "Chemicals",
      title: "Chemical Chronicals : Unveiling the Wonders of Molecules",
      cover: require(".././BlogAssets/blogImages/chemicals-01.jpg"),
    },
    {
      id: 4,
      category: "Construction And Real Estate",
      title:
        "Building Dreams : Construction And Real Estate In The Modern World",
      cover: require(".././BlogAssets/blogImages/construction-01.jpg"),
    },
    {
      id: 5,
      category: "Gifts & Crafts",
      title: "The Artisans Haven :Unique Gifts And Handcrafted Treasures",
      cover: require(".././BlogAssets/blogImages/gifts and crafts-01.jpg"),
    },
    {
      id: 6,
      category: "Hospital & Medical Supplies",
      title:
        "Vital Care: Your Trusted Source For Hospital And Medical Supplies",
      cover: require(".././BlogAssets/blogImages/hospital and medical supplies-01.jpg"),
    },
    {
      id: 7,
      category: "Electronics & Electrical Supplies",
      title: "Powering The Future :Electronics And Electrical Essentials",
      cover: require(".././BlogAssets/blogImages/electronics and electrical supplies-01.jpg"),
    },
    {
      id: 8,
      category: "Health & Beauty",
      title: "Vitality and Glamour:Nurturing Your Health And Beauty",
      cover: require(".././BlogAssets/blogImages/health and beauty-01.jpg"),
    },
    {
      id: 9,
      category: "Machinery",
      title: "Mastering Mechanics:From Gears To Robots",
      cover: require(".././BlogAssets/blogImages/machinery-01.jpg"),
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Navbar />

      <section className="category">
        <div className="content">
          <Slider {...settings}>
            {category.map((item) => (
              <div className="boxs">
                <div className="box" key={item.id}>
                  <img src={item.cover} alt="cover" />
                  <div className="overlay">
                    <h4>{item.category}</h4>
                    <p className="fw-normal fst-italic fs-5">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className="blog">
        <div className="container grid3">
          {BlogData.map((item) => (
            <div className="box boxItems" key={item.id}>
              <div className="img">
                <img src={item.cover} alt="" />
              </div>
              <div className="details">
                <div className="tag">
                  <AiOutlineTags className="icon" />
                  <Link to={`/details/${item.id}`}>#{item.category}</Link>
                </div>
                <Link
                  to={`/details/${item.id}`}
                  className="link text-decoration-none"
                >
                  <h3 className="link text-dark">{item.title.slice(0, 100)}</h3>
                </Link>
                <p>{item.desc.slice(0, 100)}...</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
