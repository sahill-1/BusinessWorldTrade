import React from 'react'
import Navbar from '../Homepage/Navbar'
import Footer from '../Homepage/Footer'
import { FiPhoneCall } from 'react-icons/fi';
import { BiHelpCircle } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import contact from '../images/contact-banner.jpg'

const Contact = () => {
    return (
        <>
            <Navbar />
            {/* about banner start */}
  <div className="container-fluid contactus-banner gap py-5 mb-4 " style={{
    backgroundImage: `url(${contact})`,
    backgroundRepeat:" no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    }}>
    <div className="row py-5">
      <div className="col-12 text-center text-light pt-3">
        <h5 style={{fontSize:"30px",fontWeight:"bold"}}>FEEL FREE TO CONTACT US</h5>
      </div>
      <div className="col-12 text-center text-light pb-3 banner-head" >
        <h1 style={{
         fontFamily: 'Poppins, sans-serif',
    fontWeight: '800 ',
    color:"white"
    }}> CONTACT US </h1>
      </div>
    </div>
  </div>
  {/* about banner start */}
            {/* <h3 className='my-3 privacy-policy'>Contact Us</h3> */}
            <div className='privacy-policy-content'>
                <p style={{ fontWeight: "500", fontSize: "18px" }}>We value your feedback, inquiries, and suggestions. Please feel free to reach out to us using the contact information provided below. Our dedicated team is ready to assist you and provide the information you need.</p>
                <br></br>
                <p style={{ fontSize: "17px" }}>
                    For general inquiries or information about our services, please contact us at:
                </p>
                <div className="contact-us-contact-details">
                    <div className="contact-us-contact-details-div">
                        <FiPhoneCall style={{ fontSize: "30px", color: "#2d5e79" }} />
                        <h6>
                            Toll Free No
                        </h6>
                        <p>+91-7042177777</p>
                    </div>
                    <div className="contact-us-contact-details-div">
                        <BiHelpCircle style={{ fontSize: "30px", color: "#2d5e79" }} />
                        <h6>
                            Help
                        </h6>
                        <p>+91-7042177777</p>
                    </div>
                    <div className="contact-us-contact-details-div">
                        <FiMail style={{ fontSize: "30px", color: "#2d5e79" }} />
                        <h6>
                            Write to us 
                        </h6>
                        <p>info@businessworldtrade.com</p>
                    </div>

                </div>
                <p style={{ fontWeight: "500", fontSize: "18px", paddingTop: "20px" }}>
                    We strive to respond to all inquiries promptly. Please provide as much detail as possible in your message so that we can better assist you. We look forward to hearing from you and building a successful business relationship.
                </p>
            </div>


            <div className="my-5 privacy-policy-form">
                <div className="privacy-policy-banner">
                    <img src="https://media.istockphoto.com/id/1271752802/photo/phone-and-e-mail-icons-on-wooden-cubes-with-contact-us-text-on-blue-background-web-page.jpg?s=612x612&w=0&k=20&c=dk9oPaDy_L9mv_icOMgsFGzEDrX0NUI3I8xBQ-DAxQM=" alt="" />
                </div>
                <div className="privacy-policy-form-control">
                    <p style={{fontSize:"24px", fontWeight:"600", textDecorationLine:"underline"}}>
                        Get In Touch
                    </p>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Control placeholder="First name" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Last name" />
                            </Col>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3 my-3" controlId="formGroupEmail">
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3 " controlId="formGroupNumber">
                                <Form.Control type="number" placeholder="Mobile number" />
                            </Form.Group>
                        </Row>
                        <Row>
                            <FloatingLabel controlId="floatingSelect" label="Select Query...">
                                <Form.Select aria-label="Floating label select example">
                                    {/* <option>Open this select menu</option> */}
                                    <option value="1">Need Sales Support</option>
                                    <option value="2">Need Service Support</option>
                                    <option value="3">Other Support</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Row>
                        
                    </Form>
                    <Button as="input" type="submit" value="Submit" className='my-3 contactus-button-color' />{' '}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact