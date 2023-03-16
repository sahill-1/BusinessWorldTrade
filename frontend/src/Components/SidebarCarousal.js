import React from "react";
import { Container, Row, Col, Navbar, Nav, Carousel } from "react-bootstrap";
import image1 from "../images/BWT1.jpeg"


const SidebarCarousel = () => {
  return (
    <>
      <Navbar>
        <Navbar.Brand href="#">Browser All Categories</Navbar.Brand>
      </Navbar>
      <Container fluid>
        <Row>
          <Col md={3} className="bg-light">
            <Nav className="flex-row">
              <Nav.Link href="#" className="text-center">
                <img src={image1} alt="fos" style={{ width: "100px" }} />
                <p>Agriculture</p>
              </Nav.Link>
              <Nav.Link href="#" className="text-center">
                <img src={image1} alt="fos" style={{ width: "100px" }} />
                <p>Beverage</p>
              </Nav.Link>
            </Nav>
            <Nav className="flex-row">
              <Nav.Link href="#" className="text-center">
                <img src={image1} alt="fos" style={{ width: "100px" }} />
                <p>Fashion</p>
              </Nav.Link>
              <Nav.Link href="#" className="text-center">
                <img src={image1} alt="fos" style={{ width: "100px" }} />
                <p>Pharmaceuticals</p>
              </Nav.Link>
            </Nav>
            <Nav className="flex-row">
              <Nav.Link href="#" className="text-center">
                <img src={image1} alt="fos" style={{ width: "100px" }} />
                <p>Chemicals</p>
              </Nav.Link>
              <Nav.Link href="#" className="text-center">
                <img src={image1} alt="fos" style={{ width: "100px" }} />
                <p>Energy & Power</p>
              </Nav.Link>
            </Nav>
            <Nav className="flex-row">
              <Nav.Link href="#" className="text-center">
                <img src={image1} alt="fos" style={{ width: "100px" }} />
                <p>Electronics</p>
              </Nav.Link>
              <Nav.Link href="#" className="text-center">
                <img src={image1} alt="fos" style={{ width: "100px" }} />
                <p>Mobile & Tablets</p>
              </Nav.Link>
            </Nav>
          </Col>

          <Col md={9} className="p-0">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-40"
                  src={image1}
                  alt="First slide"
                  style={{ height: "400px", width: "600px" }}
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image1}
                  alt="Second slide"
                  style={{ height: "400px", width: "600px" }}
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image1}
                  alt="Third slide"
                  style={{ height: "400px", width: "600px" }}
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SidebarCarousel;