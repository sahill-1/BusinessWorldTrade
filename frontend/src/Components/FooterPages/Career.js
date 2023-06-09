import React from 'react'
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";

const Career = () => {
  return (
    <>
      <Navbar />
      <div className='footer-career-banner my-4'>
        <img src="https://media.foundit.in/career-advice/wp-content/uploads/2022/03/career-in-physical-education-1068x559.jpg" alt='error' />
      </div>
      <div className='footer-career-content'>
        <div className='privacy-policy-content'>
          <p style={{ textAlign:"left", color: "grey" }}>Join our dynamic team at <span style={{ fontSize: "18px", fontWeight: "500", color: "rgb(65, 65, 65)" }}> Business World Trade</span> and be part of a leading B2B platform that connects businesses worldwide. We are passionate about fostering growth and enabling businesses to thrive in the global marketplace. As we continue to expand our services and reach, we are constantly seeking talented individuals who share our vision and can contribute to our success.
          </p>

          <p style={{ textAlign:"left",color: "grey" }}><span style={{ fontSize: "18px", fontWeight: "500", color: "rgb(65, 65, 65)", textAlign:"center" }}>Why Work With Us</span>
            <br></br>
            Meaningful Impact: At Business World Trade, you will have the opportunity to make a significant impact on the B2B industry. We empower businesses by providing them with the tools and resources they need to succeed in today's competitive market.
          </p>

          <p style={{textAlign:"left", color: "grey" }}><span style={{ fontSize: "18px", fontWeight: "500", color: "rgb(65, 65, 65)",textAlign:"center" }}>Collaborative Environment</span>
            <br></br>
            We foster a collaborative and inclusive work environment, where teamwork and innovation are highly valued. We believe in the power of diverse perspectives and encourage open communication and idea sharing.
          </p>

          <p style={{textAlign:"left", color: "grey" }}><span style={{ fontSize: "18px", fontWeight: "500", color: "rgb(65, 65, 65)", textAlign:"center" }}>Professional Growth</span>
            <br></br>
            We are committed to the growth and development of our employees. As part of our team, you will have access to learning and development programs, training workshops, and mentorship opportunities to enhance your skills and advance your career.
          </p>

          <p style={{textAlign:"left", color: "grey" }}><span style={{ fontSize: "18px", fontWeight: "500", color: "rgb(65, 65, 65)",textAlign:"center" }}>Exciting Challenges</span>
            <br></br>
            Working in the B2B industry brings exciting challenges and opportunities for continuous learning. You will have the chance to work on diverse projects, collaborate with industry experts, and stay at the forefront of technological advancements.
          </p>

          <p style={{textAlign:"left", color: "grey" }}><span style={{ fontSize: "18px", fontWeight: "500", color: "rgb(65, 65, 65)",textAlign:"center" }}>Work-Life Balance</span>
            <br></br>
            We understand the importance of maintaining a healthy work-life balance. We strive to create a flexible work environment that promotes well-being, allowing our employees to excel both personally and professionally.
          </p>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Career
