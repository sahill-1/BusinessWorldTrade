import React from "react";

import { Form, Row, Col, Button } from "react-bootstrap";
import NavbarHeader from "../Components/Homepage/Navbar";
import Footer from "../Components/Homepage/Footer";
const ContactProfile = () => {
  return (
    <>
      <NavbarHeader />
      <Form className=" mx-5 px-5 shadow rounded">
        <Row className="my-3">
          <Col>
            <Form.Group controlId="firstname">
              <Form.Label>
                First Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="lastname">
              <Form.Label>
                Last Name<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="my-3">
          <Col>
            <Form.Group controlId="companyname">
              <Form.Label>
                Phone<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="Enter Company Name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="country">
              <Form.Label>Alternate Phone</Form.Label>
              <Form.Control type="text" placeholder="Enter Country" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="my-3">
          <Col>
            <Form.Group controlId="companyname">
              <Form.Label>
                Email<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="Enter Company Name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="country">
              <Form.Label>Alternate Email</Form.Label>
              <Form.Control type="text" placeholder="Enter Country" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="my-3">
          <Col>
            <Form.Group controlId="companyname">
              <Form.Label>
                Company Name<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="Enter Company Name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" placeholder="Enter Country" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="my-3">
          <Col>
            <Form.Group controlId="companyname">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="Enter Company Name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="country">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter Country" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="my-3">
          <Col>
            <Form.Group controlId="companyname">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter Company Name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="country">
              <Form.Label>Landmark</Form.Label>
              <Form.Control type="text" placeholder="Enter Country" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="my-3">
          <Col>
            <Form.Group controlId="companyname">
              <Form.Label>Year Of Est.</Form.Label>
              <Form.Control type="text" placeholder="Enter Company Name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="country">
              <Form.Label>Business Type</Form.Label>
              <Form.Control type="text" placeholder="Enter Country" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="my-3">
          <Col>
            <Form.Group controlId="companyname">
              <Form.Label>Ownership Type</Form.Label>
              <Form.Control type="text" placeholder="Enter Company Name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="country">
              <Form.Label>No of Employees</Form.Label>
              <Form.Control type="text" placeholder="Enter Country" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="my-3">
          <Col>
            <Form.Group controlId="companyname">
              <Form.Label>Annual Turnover</Form.Label>
              <Form.Control type="text" placeholder="Enter Company Name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="country">
              <Form.Label>Company Description</Form.Label>
              <Form.Control type="text" placeholder="Enter Country" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="my-3">
          <Col>
            <Form.Group controlId="companyname">
              <Form.Label>Facebook link</Form.Label>
              <Form.Control type="text" placeholder="Enter Company Name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="country">
              <Form.Label>Instagram Link</Form.Label>
              <Form.Control type="text" placeholder="Enter Country" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="my-3">
          <Col>
            <Form.Group controlId="companyname">
              <Form.Label>Bank Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Company Name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="country">
              <Form.Label>Account Type</Form.Label>
              <Form.Control type="text" placeholder="Enter Country" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="my-3">
          <Col>
            <Form.Group controlId="companyname">
              <Form.Label>Account Number</Form.Label>
              <Form.Control type="text" placeholder="Enter Company Name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="country">
              <Form.Label>IFSC Code</Form.Label>
              <Form.Control type="text" placeholder="Enter Country" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="my-3">
          <Col>
            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>
                Multiple files input example
                <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="file" multiple />
            </Form.Group>
          </Col>
          <Col>
            <Button className="my-4">Submit</Button>
          </Col>
        </Row>
      </Form>

      <Footer />
    </>
  );
};

export default ContactProfile;
