import React from "react";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import { Container, Row, Col } from "react-bootstrap";
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
  return (
    <>
      <Navbar />
      <div className="sub-sub-category">
        <h3 style={{ fontFamily: "Poppins" }}>Sub Sub Category</h3>
      </div>
      <Container>
        <Row className="px-4 border border-secondary">
          <Col xs={6} md={2} className=" mx-2 border border-secondary">
            <h5
              className="m-auto"
              style={{ fontFamily: "Poppins", fontSize: "16px" }}
            >
              Related Category
            </h5>
            {relatedCategory.map((relatedCat) => {
              return (
                <>
                  <div className="my-2 d-flex border border-primary ">
                    <img
                      className="mx-1 m-auto"
                      style={{ width: "40px", height: "40px" }}
                      src={relatedCat.img}
                      alt={relatedCat.name}
                    />
                    <p className="mx-1 my-2">{relatedCat.name}</p>
                  </div>
                </>
              );
            })}
          </Col>

          <Col xs={12} md={9} className="border border-primary">
            <p
              style={{
                fontWeight: "500",
                fontSize: "20px",
                color: "#303030",
                fontFamily: "Poppins",
              }}
            >
              Top Sub Sub Categories
            </p>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default SubSubCategory;
