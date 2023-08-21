import React, { useState } from "react";
import Navbar from "../Components/Homepage/Navbar";
import Footer from "../Components/Homepage/Footer";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

const CatalogueForm = () => {
  const [data, setData] = useState({
    companyLogo: null,
    bannerImages: [],
    website: "",
    isoCertification: "",
    profileVideo: null,
    companyProfile: "",
  });

  const [formData, setFormData] = useState({
    companyLogo: null,
    bannerImages: [],
    profileVideo: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: files }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const completeFormData = { ...data, ...formData };
    console.log("Complete Form Data:", completeFormData);

    try {
      const token = "your_jwt_token_here"; // Replace with your actual JWT token
      const response = await fetch("http://localhost:5000/api/createCat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the Authorization header
        },
        body: JSON.stringify(completeFormData),
      });

      if (response.ok) {
        console.log("Form data successfully submitted");
        // Fetch and set the data after successful form submission
        fetchCatalogData();
      } else {
        console.error(
          "Failed to submit form data. Server returned status:",
          response.status
        );
        const errorMessage = await response.text();
        console.error("Error message from server:", errorMessage);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchCatalogData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/getCatalogData");
      if (response.ok) {
        const catalogData = await response.json();
        console.log("Fetched Catalog Data:", catalogData);
      } else {
        console.error(
          "Failed to fetch catalog data. Server returned status:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Navbar />
      <h1 style={{ fontFamily: "Poppins" }}>Catalogue Form</h1>
      <Container className="my-4">
        <Form onSubmit={handleSubmit}>
          <Row className="px-2 px-md-5 g-3">
            <Col xs={12} md={6}>
              <Form.Group controlId="companyLogo" className="mb-3">
                <Form.Label>Company Logo</Form.Label>
                <Form.Control
                  type="file"
                  name="companyLogo"
                  onChange={handleFileChange}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="bannerImages" className="mb-3">
                <Form.Label>Select Banner Images</Form.Label>
                <Form.Control
                  type="file"
                  name="bannerImages"
                  multiple
                  onChange={handleFileChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="px-2 px-md-5">
            <Col xs={12} md={6}>
              <Form.Group controlId="website" className="mb-3">
                <Form.Label>Company's Website</Form.Label>
                <Form.Control
                  type="text"
                  name="website"
                  placeholder="Enter Link"
                  value={data.website}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="isoCertification">
                <Form.Label>ISO Certification</Form.Label>
                <Form.Control
                  type="text"
                  name="isoCertification"
                  placeholder="Enter ISO certification (if any)"
                  value={data.isoCertification}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="px-2 px-md-5 g-3">
            <Col xs={12} md={6}>
              <Form.Group controlId="profileVideo" className="mb-3">
                <Form.Label>Select Profile Video</Form.Label>
                <Form.Control
                  type="file"
                  name="profileVideo"
                  onChange={handleFileChange}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3" controlId="companyProfile">
                <Form.Label>Company Profile</Form.Label>
                <Form.Control
                  as="textarea"
                  name="companyProfile"
                  placeholder="About Company"
                  style={{ height: "100px" }}
                  value={data.companyProfile}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <div>
            <Button
              className="btn btn-primary d-block mx-auto mt-2"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </Form>
      </Container>
      <Footer />
    </>
  );
};
export default CatalogueForm;
