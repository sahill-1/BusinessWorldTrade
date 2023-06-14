import React from 'react';

const AboutMe = () => {
  return (
//About Us
    <div className="about-me">
      <h2 style={{ fontSize: "28px", fontStyle: "oblique" }}>About <span style={{ color: "red", fontWeight: "700", fontSize: "30px", fontStyle: "oblique" }}>Business World Trade</span></h2>
      <img src="http://cdn.shopify.com/s/files/1/0086/0795/7054/articles/Cat_s_Mind_x630.jpg?v=1624444348" alt="error" />
      <div className="paragraph-slider">

        {/* <p>Paragraph 1 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p> */}
        <p>Paragraph 2 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        <p>Paragraph 3 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

      </div>
    </div>
  );
};

export default AboutMe; 