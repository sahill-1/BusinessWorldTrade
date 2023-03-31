import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from "../images/bwt-dark.png"
import { BsFillMicFill } from 'react-icons/bs';
import { FiHeadphones } from "react-icons/fi";
import ProductMenu from '../Homepage/ProductMenu';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { NavLink } from "react-bootstrap-v5";

const NavbarHeader = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/"><img src={logo} alt="error" style={{ width: "250px", height: '60px', marginLeft: "20px" }} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        {/* <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                    </Nav> */}

                        <Form className="d-flex mx-7 search-box" >
                            <Form.Control
                                type="search"
                                placeholder="Search Products as Buyer/Seller"
                                className="me-2"
                                aria-label="Search"
                                style={{ borderRadius: "30px 0px 0px 30px", boxShadow: "none" }}
                            />
                            <Button className="mic-button" variant="outline-success"><i><BsFillMicFill /></i></Button>
                        </Form>


                        <div className="d-flex buyer-seller" style={{ paddingRight: "130px" }}>
                            <NavDropdown title="Buyer" id="navbarScrollingDropdown" style={{ padding: "0px 20px 0px 0px" }}>
                                <NavDropdown.Item href="#action3">Post Buy Requirements</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action4">Search Suppliers</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">Request A Callback</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Seller" id="navbarScrollingDropdown" >
                                <NavDropdown.Item href="#action3">Search Buy Leads</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action4">Get Freight Quotes</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">Logistics</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">Export Bill Discounting</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">WTC Certificate</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">Export Data</NavDropdown.Item>
                            </NavDropdown>
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* SECOND NAVBAR HERE */}

            <Navbar className=' navbar-bottom' bg="light" expand="lg" style={{ marginTop: "-20px", padding: "0px 30px 0px 20px" }}>
                <Container fluid>
                    <Navbar.Collapse className="d-flex justify-content-between Navbar-Collapse">
                        <div className="product-Menu">
                            <ProductMenu />
                        </div>
                        <div className="Help-Center">
                            <Nav
                                className="me-auto my-2 my-lg-0 "
                                style={{ maxHeight: '100px'}}
                            >
                                <Nav.Link href="/" className="mx-2 right-section"><FiHeadphones />  Help Center</Nav.Link>
                                <Nav.Link href="/" className="mx-2 right-section ">Log In</Nav.Link>
                                <Nav.Link href="/" className="mx-2 right-section">Register Free</Nav.Link>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </>
    );
}

export default NavbarHeader;
