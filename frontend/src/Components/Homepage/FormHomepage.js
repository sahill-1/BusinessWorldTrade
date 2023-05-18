import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormHomepage = () => {
    return (
        <div className='HomePage-Form'>
            <div className='HomePage-Form-Left'>
                <div className='HomePage-Form-Left-Div'>
                    <img style={{width:"120px", height:"120px", borderRadius:"20px"}} src='https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9tZXN0aWMlMjBjYXR8ZW58MHx8MHx8&w=1000&q=80' alt="Error"/>
                    <p>Verified <span style={{ color: "red" }}>BUYERS</span></p>
                </div>
                <div className='HomePage-Form-Left-Div'>
                    <img style={{width:"120px", height:"120px", borderRadius:"20px"}} src='https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9tZXN0aWMlMjBjYXR8ZW58MHx8MHx8&w=1000&q=80' alt="Error" />
                    <p>Free Quotes from <span style={{ color: "red" }}>SELLER</span></p>

                </div>
                <div className='HomePage-Form-Left-Div'>
                    <img style={{width:"120px", height:"120px", borderRadius:"20px"}} src='https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9tZXN0aWMlMjBjYXR8ZW58MHx8MHx8&w=1000&q=80' alt="Error" />
                    <p>Trade with <span style={{ color: "red" }}>CONFIDENCE</span></p>
                </div>
                <div className='HomePage-Form-Left-Div'>
                    <img style={{width:"120px", height:"120px", borderRadius:"20px"}} src='https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9tZXN0aWMlMjBjYXR8ZW58MHx8MHx8&w=1000&q=80' alt="Error" />
                    <p>24/7 <span style={{ color: "red" }}>HELP CENTER</span></p>
                </div>
            </div>
            <div className='HomePage-Form-Right my-4'>
                <Form>
                    <h4>Registration Form</h4>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label style={{ display: "flex", flexDirection: "left" }}>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{ display: "flex", flexDirection: "left" }}>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>

                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Form.Group className="mb-3" style={{width:"51%"}} controlId="formBasicEmail">
                        <Form.Label style={{ display: "flex", flexDirection: "left" }}>Company</Form.Label>
                        <Form.Control type="text" placeholder="Enter Company Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{width:"43%"}} controlId="formBasicEmail">
                        <Form.Label style={{ display: "flex", flexDirection: "left" }}>Phone number</Form.Label>
                        <Form.Control type="number" placeholder="Enter Phone Number" />
                    </Form.Group>
                    </div>

                    <Form.Select aria-label="Default select example">
                        <option value="0">I am a</option>
                        <option value="1">Seller</option>
                        <option value="2">Buyer</option>
                    </Form.Select>

                    <Button className='my-3' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default FormHomepage;