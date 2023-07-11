import React from "react";
import Navbar from "./Homepage/Navbar";
import Footer from "./Homepage/Footer";
import { Container, Form, Row, Col, InputGroup, Button } from "react-bootstrap";

const ProductUploadForm = () => {
  return (
    <>
      <Navbar />
      <Container className="my-4 border border-secondary">
        {/* ROW 1 */}
        <Row className="my-2 px-2 px-md-5 g-3 ">
          <Col xs={12} md={6}>
            <Form.Group controlId="formGridState">
              <Form.Label>Category</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Select Category</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Select Category Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Col>
        </Row>

        {/* ROW 2 */}
        <Row className="px-2 px-md-5 g-3 ">
          <Col xs={12} md={6}>
            <Form.Group controlId="formGridState">
              <Form.Label>Sub Category</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Select Sub-Category</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Select Sub Category Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Col>
        </Row>

        {/* ROW 3 */}
        <Row className="px-2 px-md-5 g-3 ">
          <Col xs={12} md={6}>
            <Form.Group controlId="formGridState">
              <Form.Label>Product Name</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Select Sub-Category</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Select Product Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Col>
        </Row>

        {/* ROW 4 */}
        <Row className="px-2 px-md-5">
          <Col xs={12} md={6}>
            <Form.Label style={{ width: "100%", textAlign: "left" }}>
              Minimum Order Qty
            </Form.Label>
            <Form.Group
              style={{
                width: "100%",
                border: "1px solid transparent",
                display: "flex",
                flexDirection: "row",
              }}
              controlId="formInput"
            >
              <Form.Control
                placeholder="Quantity"
                type="text"
                name="Quantity"
                value=""
              />
              <Form.Select
                style={{ width: "30%" }}
                aria-label="Default select example"
                name="Quantity1"
              >
                <option value="CNTR">CNTR</option>
                <option value="BOX">BOX</option>
                <option value="EA">EA</option>
                <option value="PCS">PCS</option>
                <option value="DRUM">DRUM</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Label style={{ width: "100%", textAlign: "left" }}>
              Price Range
            </Form.Label>
            <Form.Group
              style={{
                width: "100%",
                border: "1px solid transparent",
                display: "flex",
                flexDirection: "row",
              }}
              controlId="formInput"
            >
              <InputGroup className="mb-3">
                <InputGroup.Text>Rs.</InputGroup.Text>
                <Form.Control aria-label="Amount (to the nearest rupees)" />
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>

        {/* ROW 5 */}
        <Row className="px-2 px-md-5">
          <Col xs={12} md={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Short Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Write description..."
                style={{ height: "100px" }}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Brief Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Write description..."
                style={{ height: "100px" }}
              />
            </Form.Group>
          </Col>
        </Row>
        <div style={{ border: "1px solid black" }}>
          <Button
            style={{
              border: "1px solid red",
              width: "20%",
              display: "flex",
              justifyContent: "center",
            }}
            className="btn btn-primary"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default ProductUploadForm;