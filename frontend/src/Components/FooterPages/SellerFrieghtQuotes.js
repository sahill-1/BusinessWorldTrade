import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const SellerFrieghtQuotes = () => {
  return (
    <>
      <div
        style={{
          width: "80%",
          border: "1px solid red",
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
          FRIEGHT QUOTES
        </h3>
        <p style={{ padding: "0px 50px", color: " rgb(65, 65, 65)" }}>
          Post your freight shipping quotes here! Also view freight shipping
          quotes from almost 100+ freight forwarders in a flash. No Hidden Cost!
          Easy Comparison! No Hidden Details!
        </p>

        <Container style={{ border: "1px solid black" }}>
          <Row
            className="p-3"
            style={{
              border: "1px solid pink",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Col
              className="p-3"
              style={{ border: "1px solid black" }}
            >
              <Row style={{ border: "1px solid black" }}>
                <h4
                  style={{
                    textAlign: "left",
                    borderBottom: "2px solid rgb(168, 165, 165)",
                    padding: "5px 0px",
                  }}
                >
                  FRIEGHT MODE
                </h4>
                <Form>
                  {["radio"].map((type) => (
                    <div
                      key={`inline-${type}`}
                      style={{
                        width: "80%",
                        border: "1px solid red",
                        display: "flex",
                        justifyContent: "space-between",
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
            </Col>
            <Col
              className="p-3"
              style={{ border: "1px solid black", height: "20vh" }}
            >
              {" "}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SellerFrieghtQuotes;
