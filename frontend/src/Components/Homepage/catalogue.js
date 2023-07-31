import React from "react";
import Navbar from "../Components/Homepage/Navbar";
import Footer from "../Components/Homepage/Footer";
import { Row, Col, Button } from "react-bootstrap";
import logo from "../Components/images/bwt-dark.png";
const Catalogue = () => {
  return (
    <>
      <Navbar />
      <Row className="border">
        <Col className="pl-5 m-auto">Company Name</Col>
        <Col className="m-auto" xs={5}>
          Silver member Since 2020
        </Col>
        <Col className="pl-5">
          <Button>Contact Supplier</Button>
        </Col>
      </Row>

      <div className="d-flex flex-wrap justify-content-around my-3">
        <div>
          <img
            src={logo}
            alt="error"
            style={{ width: "15%", objectFit: "contain" }}
          />
        </div>

        <h5>Designated BusinessType since 2000</h5>
      </div>
      <Footer />
    </>
  );
};

export default Catalogue;
