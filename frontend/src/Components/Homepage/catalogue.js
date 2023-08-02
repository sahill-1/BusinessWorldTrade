import React, { useState } from "react";
import Navbar from "../Components/Homepage/Navbar";
import Footer from "../Components/Homepage/Footer";
import { Row, Col, Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import logo from "../Components/images/bwt-dark.png";
import Carousel from "react-bootstrap/Carousel";
import BWT2 from "../Components/images/BWT2.jpeg";
import { FiPhoneCall } from "react-icons/fi";
import { BiHelpCircle } from "react-icons/bi";
import { FiMail } from "react-icons/fi";

const Catalogue = () => {
  const pstyle = {
    textAlign: "center",
    color: "black",
    fontWeight: "light",
    fontSize: "17px",
  };
  const spanstyle = {
    fontSize: "18px",
    fontWeight: "500",
    color: "rgb(65, 65, 65)",
  };

  const data = [
    {
      name: "aaaaaaaaaaaaaaa",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    },
    {
      name: "bbbbbbbbbbbbbbb",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    },
    {
      name: "cccccccccccccc",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    },
    {
      name: "ddddddddddddddd",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    },
    {
      name: "eeeeeeeeeeee",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    },
    {
      name: "fffffffffff",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Navbar />
      <div
        className="d-flex p-2 justify-content-around align-items-center"
        style={{ boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px" }}
      >
        <h6 className="my-0">Company Name</h6>
        <h6 className="my-0">Silver Member since 2020</h6>
        <Button variant="secondary">Contact Now</Button>
      </div>

      <div className="d-flex flex-wrap justify-content-around align-items-center my-3">
        <div className="w-25">
          <img
            src={logo}
            alt="error"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </div>
        <div>
          <h5>
            Designated <span style={{ color: "red" }}>Business Type</span> since{" "}
            <span style={{ color: "red" }}>2000</span>
          </h5>
        </div>
      </div>

      {/* BANNER SECTION */}
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            src={BWT2}
            text="First slide"
            alt="error"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={BWT2}
            text="Second slide"
            alt="error"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={BWT2}
            text="third slide"
            alt="error"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Carousel.Item>
      </Carousel>

      {/* PRODUCTS */}
      <h2 className="text-center my-4 catalog-about-heading">Products</h2>
      <Container>
        <Row className=" my-2">
          <Col md={4}>
            <Card style={{ width: "18rem", margin: "auto" }}>
              <Card.Img
                className="p-3"
                variant="top"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
              />
              <Card.Body>
                <Card.Title>Product Name</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Price Per Quantity</ListGroup.Item>
                <ListGroup.Item>MOQ</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Contact Now</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <div className="d-flex flex-wrap justify-content-evenly">
              {data.map((item) => {
                return (
                  <>
                    <Card style={{ width: "14rem", padding: "10px" }}>
                      <Card.Img variant="top" src={item.img} />
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>

      {/* ABOUT */}
      <h2 className="text-center my-4 catalog-about-heading">
        About "Company Name"
      </h2>
      <div className="w-100  px-5 catalogue-div-about-us-div">
        <div className="text-center px-5 catalogue-div-about-us-div-video">
          <video
            width="850"
            height="500"
            controls
            style={{ objectFit: "cover" }}
          >
            <source src="https://youtu.be/Kb8CW3axqRE" type="video/mp4" />
          </video>
        </div>
        <div className="catalogue-div-about-us-div-profile">
          <h3 style={{ color: "#313131" }}>Company Profile</h3>
          <div className="my-3 scroll-container">
            <p className="text-left text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      {/* CONTACT US */}
      <h2 className="text-center my-4 catalog-about-heading">Contact Us</h2>
      <Container>
        <Row>
          <Col>
            <div className="contact-us-container-catalogue">
              <div className="form-container-catalogue">
                <h2>Contact Us</h2>
                <form>
                  <div className="form-group-catalogue">
                    <label htmlFor="from">From:</label>
                    <input type="text" id="from" name="from" required />
                  </div>
                  <div className="form-group-catalogue">
                    <label htmlFor="to">To:</label>
                    <input type="text" id="to" name="to" required />
                  </div>
                  <div className="form-group-catalogue">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                  </div>
                  <button type="submit">Send Message</button>
                </form>
              </div>
            </div>
          </Col>

          <Col className="d-flex align-items-center">
            <iframe
              className="contact-us-map"
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7017.587495097762!2d77.32073398885588!3d28.42547973848462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdda23d188a31%3A0x9ed9bf2084d105b6!2sBasilva%20Colony%2C%20Old%20Faridabad%2C%20Faridabad%2C%20Haryana%20121002!5e0!3m2!1sen!2sin!4v1690889790453!5m2!1sen!2sin"
              width="500"
              height="450"
              style={{ margin: "auto" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </Col>
        </Row>
      </Container>

      {/* CONTACT DETAILS */}
      <Container className="my-4 px-5">
        <div
          className="row"
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          <h4 className="text-center my-2 ">Connect With Us</h4>
          <div className="col-md-4 col-sm-12 my-2">
            <p style={pstyle}>
              <FiPhoneCall style={{ margin: "auto", color: "orange" }} />
              Customer Care No.
              <span style={spanstyle}>
                <br />
                +91-7042177777
              </span>
            </p>
          </div>
          <div className="col-md-4 col-sm-12 my-2">
            <p style={pstyle}>
              <BiHelpCircle style={{ margin: "auto", color: "orange" }} />
              Help
              <span style={spanstyle}>
                <br />
                +91-7042177777
              </span>
            </p>
          </div>
          <div className="col-md-4 col-sm-12 my-2">
            <p style={pstyle}>
              <FiMail style={{ margin: "auto", color: "orange" }} />
              Write To Us
              <span style={spanstyle}>
                <br />
                info@businessworldtrade.com
              </span>
            </p>
          </div>
        </div>
      </Container>

      {/* ADDRESS DETAILS */}
      <Container className="my-4 px-5">
        <Row
          style={{
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          }}
        >
          <Col
            md={6}
            className="border-right px-5 text-center my-3 address-details-column"
          >
            <h5 className="text-center text-decoration-underline">
              Office Address
            </h5>
            <p>Adress Line</p>
            <p>Landmark Location</p>
            <p>District, City</p>
            <h6>Pincode, State</h6>
          </Col>
          <Col md={6} className="px-5 text-center my-3">
            <h5 className="text-center text-decoration-underline">
              Authentication
            </h5>
            <p>BusinessType since "year"</p>
            <p>Our "Member" since "year"</p>
            <p>Main Products listed here</p>
            <p>ISO certification (if any)</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Catalogue;
