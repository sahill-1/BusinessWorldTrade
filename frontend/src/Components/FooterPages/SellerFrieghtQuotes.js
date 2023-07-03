import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const SellerfreightQuotes = () => {
  return (
    <>
      <div
        style={{
          width: "80%",
          border: "1px solid transparent",
          margin: "auto",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 6px 8px 6px",
          borderRadius: "5px",
        }}
      >
        <h3
          style={{
            fontSize: "25px",
            fontWeight: "500",
            fontFamily: "'Roboto, sans-serif",
            textShadow: "1.5px 1px rgb(168, 165, 165)",
          }}
        >
          FREIGHT QUOTES
        </h3>
        <p style={{ padding: "0px 50px", color: " rgb(65, 65, 65)" }}>
          Post your freight shipping quotes here! Also view freight shipping
          quotes from almost 100+ freight forwarders in a flash. No Hidden Cost!
          Easy Comparison! No Hidden Details!
        </p>

        <Container style={{ border: "1px solid transparent" }}>
          <Row
            className="p-3 seller-freight-quotes-mq"
            style={{
              display: "flex",
              flexWrap: "wrap",
              border:"1px solid transparent",
            }}
          >
            {/* COLUMN 1 */}
            <Col className="p-3 seller-freight-quotes-mq" style={{ border: "1px solid transparent" }}>
              {/* ROW 1 */}
              <Row className="mb-3" style={{ border: "1px solid transparent" }}>
                <h4
                  style={{
                    width: "80%",
                    textAlign: "left",
                    borderBottom: "2px solid rgb(168, 165, 165)",
                    padding: "5px 0px",
                  }}
                >
                  FREIGHT MODE
                </h4>
                <Form style={{ width: "100%" }}>
                  {["radio"].map((type) => (
                    <div
                      key={`inline-${type}`}
                      style={{
                        width: "80%",
                        border: "1px solid transparent",
                        display: "flex",
                        flexWrap:"wrap",
                        justifyContent: "space-between",
                        position: "relative",
                        left: "0",
                      }}
                    >
                      <Form.Check
                        inline
                        label="By Sea"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="By Air"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </Form>
              </Row>

              {/* ROW 2 */}
              <Row className="mb-3">
                <h4
                  style={{
                    width: "80%",
                    textAlign: "left",
                    borderBottom: "2px solid rgb(168, 165, 165)",
                    padding: "5px 0px",
                  }}
                >
                  LOCATION DETAILS
                </h4>
                <div className="freight-quotes-location-details"
                  style={{
                    width: "80%",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px 0px",
                    justifyContent: "space-between",
                    border: "1px solid transparent",
                  }}
                >
                  <div
                    style={{ width: "45%", border: "1px solid transparent" }}
                  >
                    <Form.Label style={{ width: "100%", textAlign: "left" }}>
                      From (Origin)<spam style={{ color: "red" }}>*</spam>
                    </Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>From Origin</option>
                      <option value="1">City One</option>
                      <option value="2">City Two</option>
                      <option value="3">City Three</option>
                    </Form.Select>
                  </div>
                  <div
                    style={{ width: "45%", border: "1px solid transparent" }}
                  >
                    <Form.Label style={{ width: "100%", textAlign: "left" }}>
                      Container Size<spam style={{ color: "red" }}>*</spam>
                    </Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>20'</option>
                      <option value="1">40'</option>
                      <option value="2">60'</option>
                      <option value="3">LCL</option>
                      <option value="3">Other on details</option>
                    </Form.Select>
                  </div>
                  <div
                    style={{ width: "45%", border: "1px solid transparent" }}
                  >
                    <Form.Label style={{ width: "100%", textAlign: "left" }}>
                      To (Destination)<spam style={{ color: "red" }}>*</spam>
                    </Form.Label>
                    <Form.Group controlId="formInput">
                      <Form.Control type="text" value="" />
                    </Form.Group>
                  </div>
                </div>
              </Row>

              {/* ROW 3 */}
              <Row >
                <h4
                  style={{
                    width: "80%",
                    textAlign: "left",
                    borderBottom: "2px solid rgb(168, 165, 165)",
                    padding: "5px 0px",
                  }}
                >
                  ITEM DETAILS
                </h4>
                <div style={{ width: "80%", border: "1px solid transparent" }}>
                  <div style={{ width: "100%", border: "1px solid transparent" }}>
                    <Form.Label style={{ width: "100%", textAlign: "left" }}>
                      Quantity<spam style={{ color: "red" }}>*</spam>
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
                        value=""
                      />
                      <Form.Select style={{width:"30%"}} aria-label="Default select example">
                        
                        <option value="1">CNTR</option>
                        <option value="2">BOX</option>
                        <option value="3">EA</option>
                        <option value="4">PCS</option>
                        <option value="5">DRUM</option>

                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div style={{ width: "100%", border: "1px solid transparent" }}>
                    <Form.Label style={{ width: "100%", textAlign: "left" }}>
                      Weight<spam style={{ color: "red" }}>*</spam>
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
                        placeholder="Weight"
                        type="text"
                        value=""
                      />
                      <Form.Select style={{width:"30%"}} aria-label="Default select example">
                        <option value="1">M/T</option>
                        <option value="2">KG</option>
                        <option value="3">LBS</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div style={{ width: "100%", border: "1px solid transparent" }}>
                    <Form.Label style={{ width: "100%", textAlign: "left" }}>
                      Volume<spam style={{ color: "red" }}>*</spam>
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
                        placeholder="Volume"
                        type="text"
                        value=""
                      />
                      <Form.Select style={{width:"30%"}} aria-label="Default select example">
                        <option value="1">CBM</option>
                        <option value="2">CBF</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                </div>
              </Row>

              {/* ROW 4 */}
              
            </Col>

            {/* COLUMN 2 */}
            <Col className="p-3" style={{ border: "1px solid transparent" }}>
              {/* ROW 1 */}
              <Row className="mb-3" style={{ border: "1px solid transparent" }}>
                <h4
                  style={{
                    width: "80%",
                    textAlign: "left",
                    borderBottom: "2px solid rgb(168, 165, 165)",
                    padding: "5px 0px",
                  }}
                >
                  SHIPMENT TYPE
                </h4>
                <Form style={{ width: "80%" }}>
                  {["radio"].map((type) => (
                    <div
                      key={`inline-${type}`}
                      style={{
                        width: "100%",
                        border: "1px solid transparent",
                        display: "flex",
                        flexWrap:"wrap",
                        justifyContent: "space-between",
                        position: "relative",
                        left: "0",
                      }}
                    >
                      <Form.Check
                        inline
                        label="from India"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="to India"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </Form>
              </Row>

              {/* ROW 2 */}
              <Row className="mb-3">
                <h4
                  style={{
                    width: "80%",
                    textAlign: "left",
                    borderBottom: "2px solid rgb(168, 165, 165)",
                    padding: "5px 0px",
                  }}
                >
                  OTHER DETAILS
                </h4>
                <div className="freight-quotes-other-details"
                  style={{
                    width: "80%",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px 0px",
                    justifyContent: "space-between",
                    border: "1px solid transparent",
                  }}
                >
                  <div
                    style={{ width: "45%", border: "1px solid transparent" }}
                  >
                    <Form.Label style={{ width: "100%", textAlign: "left" }}>
                      Shipment date<spam style={{ color: "red" }}>*</spam>
                    </Form.Label>
                    <Form.Group controlId="formInput">
                      <Form.Control type="text" value="" />
                    </Form.Group>
                  </div>
                  <div
                    style={{ width: "45%", border: "1px solid transparent" }}
                  >
                    <Form.Label style={{ width: "100%", textAlign: "left" }}>
                      From (Origin)<spam style={{ color: "red" }}>*</spam>
                    </Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Cargo Status</option>
                      <option value="1">General</option>
                      <option value="2">Hazardous</option>
                      <option value="3">Reefer</option>
                      <option value="4">Over Dimension</option>
                      <option value="5">Open Top</option>
                      <option value="6">More Details</option>
                    </Form.Select>
                  </div>
                  <div
                    style={{ width: "55%", border: "1px solid transparent" }}
                  >
                    <Form.Label style={{ width: "100%", textAlign: "left" }}>
                      Commodity Details<spam style={{ color: "red" }}>*</spam>
                    </Form.Label>
                    <Form.Group controlId="formInput">
                      <Form.Control type="text" value="" />
                    </Form.Group>
                  </div>
                  
                </div>
              </Row>

              {/* ROW 3 */}
              <Row >
                <h4
                  style={{
                    width: "80%",
                    textAlign: "left",
                    borderBottom: "2px solid rgb(168, 165, 165)",
                    padding: "5px 0px",
                  }}
                >
                  PAYMENT DETAILS
                </h4>
                <div style={{ width: "80%", border: "1px solid transparent" }}>
                  <div style={{ width: "100%", border: "1px solid transparent" }}>
                    <Form.Label style={{ width: "100%", textAlign: "left" }}>
                      Last Day of Quotation<spam style={{ color: "red" }}>*</spam>
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
                        placeholder="Last date of quotation"
                        type="text"
                        value=""
                      />
                      
                    </Form.Group>
                  </div>
                  <div style={{ width: "100%", border: "1px solid transparent" }}>
                    <Form.Label style={{ width: "100%", textAlign: "left" }}>
                      Status Details<spam style={{ color: "red" }}>*</spam>
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
                        placeholder="Status details"
                        type="text"
                        value=""
                      />
                    </Form.Group>
                  </div>
                  <div style={{ width: "100%", border: "1px solid transparent" }}>
                    <Form.Label style={{ width: "100%", textAlign: "left" }}>
                      Freight payment methods<spam style={{ color: "red" }}>*</spam>
                    </Form.Label>
                    <div style={{width:"100%", border:"1px solid transparent", display:"flex", flexWrap:"wrap"}}>
                    <Form style={{ width: "80%" }}>
                  {["radio"].map((type) => (
                    <div
                      key={`inline-${type}`}
                      style={{
                        width: "100%",
                        border: "1px solid transparent",
                        display: "flex",
                        flexWrap:"wrap",
                        justifyContent: "space-between",
                      }}
                    >
                      <Form.Check className="a-b-c" style={{width:"100%",textAlign:"left"}}
                        inline
                        label="Freight on Board"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check className="a-b-c" style={{width:"100%",textAlign:"left"}}
                        inline
                        label="Cost on Freight"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check className="a-b-c" style={{width:"100%",textAlign:"left"}}
                        inline
                        label="Cost Net Insured"
                        name="group1"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check className="a-b-c" style={{width:"100%",textAlign:"left"}}
                        inline
                        label="Cash Against Delivery "
                        name="group1"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form>
                    </div>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>

          <Row className="freight-quotes-aiming-transit" style={{
              display: "flex",
              flexWrap: "wrap",
              border:"1px solid transparent"
            }}>
            <Col  style={{ border: "1px solid transparent" }}>
            <div style={{ width: "100%", border: "1px solid transparent" }}>
                    <Form.Label style={{ width: "100%", textAlign: "left" }}>
                      Aiming Freight (Cost)<spam style={{ color: "red" }}>*</spam>
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
                        placeholder="Aiming Freight "
                        type="text"
                        value=""
                      />
                      
                    </Form.Group>
                  </div>
            </Col>
            <Col  style={{ border: "1px solid transparent" }}>
            <div style={{ width: "100%", border: "1px solid transparent" }}>
                    <Form.Label style={{ width: "100%", textAlign: "left" }}>
                      Transit Time Required<spam style={{ color: "red" }}>*</spam>
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
                      <Form.Select aria-label="Default select example">
                      <option>Number Of Days</option>
                      <option value="1">1-3 Days</option>
                      <option value="2">3-7 Days</option>
                      <option value="3">7-15 Days</option>
                      <option value="4">15-30 Days </option>
                      <option value="6">30-60 Days</option>
                    </Form.Select>
                      
                    </Form.Group>
                  </div>
            </Col>
          </Row>
          <Row>
            <Button className="my-2 " style={{width:"auto", margin:"auto"}} type="submit">Get Freights</Button>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SellerfreightQuotes;
