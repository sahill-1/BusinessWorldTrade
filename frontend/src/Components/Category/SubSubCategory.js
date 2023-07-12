import React from "react";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import { Container, Row, Col } from "react-bootstrap";
import "./SubSubCategory.css";

const SubSubCategory = () => {
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

  const containerStyle = {
    scrollbarGutter: "stable both-edges",
  };
  return (
    <>
      <Navbar />
      <div className="sub-sub-category">
        <h3 className="category-heading">Sub Sub Category</h3>
      </div>
      <Container>
        <Row className="px-4 border border-secondary">
          <Col xs={6} md={2} className="mx-2 rounded shadow">
            <h5 className="category-heading">Related Category</h5>
            <div className="category-list" style={containerStyle}>
              {relatedCategory.map((relatedCat) => (
                <div key={relatedCat.name} className="category-item">
                  <img
                    className="category-img"
                    src={relatedCat.img}
                    alt={relatedCat.name}
                  />
                  <p className="category-name">{relatedCat.name}</p>
                </div>
              ))}
            </div>
          </Col>

          <Col xs={12} md={9} className="border border-primary">
            <p className="sub-category-heading">Top Sub Sub Categories</p>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default SubSubCategory;
