import React, { useState } from 'react';
import './Modal.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            {/* <h2>Modal Title</h2>
            <p>This is a sample modal.</p> */}
            <div>
              <FloatingLabel style={{ outline: "none !important" }} controlId="floatingText" label="First & Last Name" className="mb-2">
                <Form.Control type="text" placeholder="Full Name" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput" label="Email address" className="mb-2">
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>

              <FloatingLabel controlId="floatingNumber" label="Number" className="mb-2">
                <Form.Control type="number" placeholder="Number" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingText" label="Type your query" className="mb-2">
                <Form.Control type="text" placeholder="Text" />
              </FloatingLabel>
              <Dropdown as={ButtonGroup} style={{ position: "relative", right: "40%" }}>
                <Button variant="success">I am</Button>

                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                <Dropdown.Menu style={{ width: "auto", padding: "6px" }}>
                  <Dropdown.Item style={{ padding: "4px" }} href="#/action-1">Buyer</Dropdown.Item>
                  <Dropdown.Item style={{ padding: "4px" }} href="#/action-2">Seller</Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>

            </div>
            <Button variant="primary" size="lg">
              Submit
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
