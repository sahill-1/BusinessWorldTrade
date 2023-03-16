import {
    NavDropdown,
    Navbar,
    Form,
    FormControl,
    Button,
  } from "react-bootstrap";
  import hello from "../images/BWT3.jpeg";
  import 'bootstrap/dist/css/bootstrap.min.css';

  
  const Header = () => {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">
            <img src={hello} alt="helo" style={{}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="mx-auto d-flex" style={{ width: "50%" }}>
              <FormControl
                type="search"
                placeholder="Inter your Product Name or seller Name"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
  
              <NavDropdown.Divider />
            </Form>
            <NavDropdown
              title="Role"
              id="navbarScrollingDropdown"
              style={{ marginRight: "100px" }}
            >
              <NavDropdown.Item href="#action3">Seller</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Buyer</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Help</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  };
  
  export default Header;