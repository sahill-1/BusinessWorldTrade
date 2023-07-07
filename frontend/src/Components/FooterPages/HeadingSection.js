import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./FooterMain.css";
function HeadingSection() {
  const [activeContent, setActiveContent] = useState(null);

  const handleHeadingClick = (contentId) => {
    setActiveContent(contentId);
  };

  return (
    <div>
      <div
        style={{
          width: "80%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <h2
          className={activeContent === "content1" ? "active" : ""}
          onClick={() => handleHeadingClick("content1")}
        >
          Heading 1
        </h2>
        <h2
          className={activeContent === "content2" ? "active" : ""}
          onClick={() => handleHeadingClick("content2")}
        >
          Heading 2
        </h2>
        <h2
          className={activeContent === "content3" ? "active" : ""}
          onClick={() => handleHeadingClick("content3")}
        >
          Heading 3
        </h2>
      </div>

      <div
        className="content"
        id="content1"
        style={{
          display: activeContent === "content1" ? "block" : "none",
          width: "80%",
          margin: "auto",
        }}
      >
        <Container>
          <Row style={{ gap: "10px" }}>
            {/* COLUMN ONE */}
            <Col style={{ padding: "0px" }}>
              <div style={{ position: "Relative", display: "inline-block" }}>
                <img
                  style={{
                    width: "336px",
                    height: "531px",
                    objectFit: "cover",
                  }}
                  src="https://m.timesofindia.com/photo/85301692/85301692.jpg"
                  alt=""
                />
                <h4
                  style={{
                    width: "100%",
                    color: "white",
                    position: "absolute",
                    top: "75%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    padding: "10px",
                  }}
                >
                  Indian Flag
                </h4>
              </div>
            </Col>

            {/* COLUMN TWO */}
            <Col className="m-auto " >
                <Row className="my-2">
                <div style={{ position: "Relative", display: "inline-block" }}>
                <img
                  style={{
                    width: "340px",
                    height: "250px",
                    objectFit: "cover",
                  }}
                  src="https://m.timesofindia.com/photo/85301692/85301692.jpg"
                  alt=""
                />
                <h4
                  style={{
                    width: "93%",
                    color: "white",
                    position: "absolute",
                    top: "75%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    padding: "10px",
                  }}
                >
                  Indian Flag
                </h4>
              </div>
                </Row>
                <Row className="my-2">
                <div style={{ position: "Relative", display: "inline-block" }}>
                <img
                  style={{
                    width: "340px",
                    height: "250px",
                    objectFit: "cover",
                  }}
                  src="https://m.timesofindia.com/photo/85301692/85301692.jpg"
                  alt=""
                />
                <h4
                  style={{
                    width: "93%",
                    color: "white",
                    position: "absolute",
                    top: "75%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    padding: "10px 10px",
                  }}
                >
                  Indian Flag
                </h4>
              </div>
                </Row>              
            </Col>

            {/* COLUMN THREE */}
            <Col className="m-auto">
            <Row className="my-2">
                <div style={{ position: "Relative", display: "inline-block" }}>
                <img
                  style={{
                    width: "240px",
                    height: "250px",
                    objectFit: "cover",
                  }}
                  src="https://m.timesofindia.com/photo/85301692/85301692.jpg"
                  alt=""
                />
                <h4
                  style={{
                    width: "70%",
                    color: "white",
                    position: "absolute",
                    top: "75%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    padding: "10px",
                  }}
                >
                  Indian Flag
                </h4>
              </div>
                </Row>
                <Row className="my-2">
                <div style={{ position: "Relative", display: "inline-block" }}>
                <img
                  style={{
                    width: "240px",
                    height: "250px",
                    objectFit: "cover",
                  }}
                  src="https://m.timesofindia.com/photo/85301692/85301692.jpg"
                  alt=""
                />
                <h4
                  style={{
                    width: "70%",
                    color: "white",
                    position: "absolute",
                    top: "75%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    padding: "10px 10px",
                  }}
                >
                  Indian Flag
                </h4>
              </div>
                </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="content"
        id="content2"
        style={{
          display: activeContent === "content2" ? "block" : "none",
          width: "80%",
          margin: "auto",
          border: "1px solid red",
        }}
      >
        <p>Content for Heading 2</p>
      </div>
      <div
        className="content"
        id="content3"
        style={{
          display: activeContent === "content3" ? "block" : "none",
          width: "80%",
          margin: "auto",
          border: "1px solid red",
        }}
      >
        <p>Content for Heading 3</p>
      </div>
    </div>
  );
}

export default HeadingSection;
