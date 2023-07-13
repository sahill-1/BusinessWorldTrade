import React from "react";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import "./SubSubCategory.css";

const SubSubCategory = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 848 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 848, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  const relatedCategory = [
    {
      img: "https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp",
      name: "One",
    },
    {
      img: "https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp",
      name: "Two",
    },
    {
      img: "https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp",
      name: "Three",
    },
    {
      img: "https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp",
      name: "Four",
    },
    {
      img: "https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp",
      name: "Five",
    },
    {
      img: "https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp",
      name: "Six",
    },
    {
      img: "https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp",
      name: "Seven",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="sub-sub-category">
        <h3 className="category-heading">Sub Sub Category</h3>
      </div>
      <Container>
        <Row className="px-4 container-row">
          <Col
            xs={6}
            md={2}
            style={{ width: "24%" }}
            className="mx-2 rounded shadow container-row-column-one"
          >
            <h6 className="category-heading my-2">Related Category</h6>
            <div className="category-list mt-3">
              {relatedCategory.map((relatedCat) => (
                <div key={relatedCat.name} className="category-item ">
                  <img
                    className="category-img"
                    src={relatedCat.img}
                    alt={relatedCat.name}
                  />
                  <p className="category-name mt-2">{relatedCat.name}</p>
                </div>
              ))}
            </div>
          </Col>

          <Col
            xs={12}
            md={9}
            className="shadow container-row-column-two"
            style={{ width: "74%" }}
          >
            <p className="sub-category-heading my-2">Top Sub Sub Categories</p>
            <Carousel responsive={responsive}>
              {relatedCategory.map((category) => (
                <div
                  key={category.index}
                  className="my-3 mx-3 container-row-column-two-div"
                >
                  <img
                    style={{}}
                    className="rounded"
                    src={category.img}
                    alt={category.name}
                  />
                  <p className="text-center my-2 text-bold">{category.name} </p>
                </div>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default SubSubCategory;
