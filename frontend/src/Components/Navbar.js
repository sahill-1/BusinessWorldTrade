import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from "../images/bwt-dark.png";
import { BsFillMicFill } from 'react-icons/bs';
import ProductMenu from '../Components/ProductMenu';

// import { NavLink } from "react-bootstrap-v5";
// import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarHeader = () => {
    return (
        <>
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/"><img src={logo} alt="error" style={{width:"240px", height:'60px'}} /></Navbar.Brand>
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
                    
                    <Form className="d-flex mx-10 search-box" >
                        <Form.Control
                            type="search"
                            placeholder="Search Products Here"
                            className="me-2"
                            aria-label="Search"
                            style={{borderRadius:"30px 0px 0px 30px", boxShadow:"none"}}
                        /> 
                        <Button className="mic-button"  variant="outline-success"><i><BsFillMicFill /></i></Button>
                    </Form>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/" className="right-section">Buyer</Nav.Link>
                        <Nav.Link href="/" className="right-section">Seller</Nav.Link>
                    </Nav>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                    >
                        <Nav.Link href="/" className="right-section">Log In</Nav.Link>
                        <Nav.Link href="/" className="right-section">Register Free</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
        <Navbar bg="light" expand="lg" style={{paddingBottom:"20px", border:"1px solid blue"}}>
      <ProductMenu />  
        </Navbar>
        </>
        
        
    );
}
export default NavbarHeader;
