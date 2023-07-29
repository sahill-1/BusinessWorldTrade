import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../images/bwt-dark.png";
import { BiSearch } from "react-icons/bi";
import { FiHeadphones } from "react-icons/fi";
import ProductMenu from "../Homepage/ProductMenu";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import LoginPage from "../LogIn/LogIn";
import axios from "axios";

const NavbarHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    navigate(`/category-product?search=${searchTerm}`);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/products/search/${searchTerm}`
      );
      console.log("Search Results:", response.data);
    } catch (error) {
      console.error("Error searching for products:", error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    // Perform your actual login authentication here.
    // For simplicity, we'll just assume the login is successful after 2 seconds.
    setTimeout(() => {
      setIsLoggedIn(true);
      setShowLoginModal(false);
    }, 2000);
  };

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <>
      <Navbar bg="light" expand="lg" style={{ width: "100%" }}>
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                alt="error"
                style={{
                  width: "250px",
                  height: "60px",
                  marginLeft: "20px",
                }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex mx-7 search-box" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                placeholder="Search Products as Buyer/Seller"
                className="me-2"
                aria-label="Search"
                style={{
                  borderRadius: "30px 0px 0px 30px",
                  boxShadow: "none",
                }}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button
                className="mic-button"
                variant="outline-success"
                type="submit"
              >
                <i>
                  <BiSearch />
                </i>
              </Button>
            </Form>

            <div
              className="d-flex buyer-seller"
              style={{ paddingRight: "130px" }}
            >
              <NavDropdown
                title="Buyer"
                id="navbarScrollingDropdown"
                style={{
                  fontSize: "16.5px",
                  fontWeight: "600",
                  color: "#3d3d3d",
                  padding: "0px 20px 0px 0px",
                }}
              >
                {/* ... Buyer dropdown items ... */}
                <Dropdown.Item href="/post-by-requirement">
                  Post By Requirement
                </Dropdown.Item>
                <Dropdown.Item href="/search-supplier">
                  Search Supplier
                </Dropdown.Item>
                <Dropdown.Item href="/request-callback">
                  Request Callback
                </Dropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Seller"
                id="navbarScrollingDropdown"
                style={{
                  fontSize: "16.5px",
                  fontWeight: "600",
                  color: "#3d3d3d",
                  padding: "0px 20px 0px 0px",
                }}
              >
                {/* ... Seller dropdown items ... */}
                <Dropdown.Item href="/search-buy-leads">
                  Search Buy Leads
                </Dropdown.Item>
                <Dropdown.Item href="/">Get Frieght Quotes</Dropdown.Item>
                <Dropdown.Item href="/logistics">Logistics</Dropdown.Item>
                <Dropdown.Item href="/seller-iso-certification">
                  ISO Certification
                </Dropdown.Item>
              </NavDropdown>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* SECOND NAVBAR HERE */}

      <Navbar
        className="navbar-bottom"
        bg="light"
        expand="lg"
        style={{
          marginTop: "-20px",
          padding: "0px 30px 0px 20px",
        }}
      >
        <Container fluid>
          <Navbar.Collapse className="d-flex justify-content-between Navbar-Collapse">
            <div className="product-Menu">
              <ProductMenu />
            </div>
            <div className="Help-Center">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
              >
                <Nav.Link href="/" className="mx-2 right-section">
                  <FiHeadphones /> Help Center
                </Nav.Link>

                {isLoggedIn ? (
                  <Button variant="outline-danger" onClick={handleLogout}>
                    Logout
                  </Button>
                ) : (
                  <Button
                    variant="outline-secondary"
                    onClick={handleShowLoginModal}
                  >
                    Login
                  </Button>
                )}

                <Nav.Link href="register" className="mx-2 right-section">
                  Register Free
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header> */}
        {/* <Modal.Body> */}
        {/* Pass the handleLogin function to the LoginPage */}
        <LoginPage handleLogin={handleLogin} />
        {/* </Modal.Body> */}
      </Modal>
    </>
  );
};

export default NavbarHeader;
