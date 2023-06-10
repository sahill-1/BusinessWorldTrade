import React from 'react';
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";

const PrivacyPolicy = () => {
    return (
        <>
            <Navbar />
            <h3 className='my-3 privacy-policy'>Privacy Policy</h3>
            <div className='privacy-policy-content'>
                <p style={{textAlign:"left", color: "grey" }}><span style={{ fontSize: "18px", fontWeight: "500", color: "rgb(65, 65, 65)" }}>At Business World Trade,</span><br></br> we are committed to protecting the privacy and confidentiality of our users' personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard the information we gather from our users.
                    Information Collection and Use
                    We may collect certain personally identifiable information from our users, including but not limited to:
                    Name, company name, and contact details (email address, phone number, address).
                    Business information such as industry, products/services, and company size.
                    We collect this information to enhance the user experience, provide personalized services, improve our products and services, and facilitate seamless communication between businesses.</p>

                <p style={{textAlign:"left", color: "grey" }}><span style={{ fontSize: "18px", fontWeight: "500", color: "rgb(65, 65, 65)" }}>Data Security</span>
                    <br></br>
                    We implement appropriate security measures to protect the personal information we collect from unauthorized access, alteration, disclosure, or destruction. We regularly review our security practices to ensure the utmost protection of user data.
                </p>

                <p style={{ textAlign:"left",color: "grey" }}><span style={{ fontSize: "18px", fontWeight: "500", color: "rgb(65, 65, 65)" }}>Information Sharing</span>
                    <br></br>
                    We may share users' personal information in the following circumstances:

                    With business partners, suppliers, or service providers to facilitate transactions or deliver requested services.
                    In response to legal requirements, such as court orders or government regulations.
                    With your consent for any other purpose not mentioned in this Privacy Policy.
                    We do not sell, rent, or trade personal information with third parties for their promotional purposes.
                </p>

                <p style={{textAlign:"left", color: "grey" }}><span style={{ fontSize: "18px", fontWeight: "500", color: "rgb(65, 65, 65)" }}>Cookies and Tracking Technologies</span>
                    <br></br>
                    Our website may use cookies and similar tracking technologies to enhance user experience, analyze trends, and gather demographic information. Users can control cookies through their browser settings, but disabling cookies may limit the functionality of certain website features.
                </p>

                <p style={{textAlign:"left", color: "grey" }}><span style={{ fontSize: "18px", fontWeight: "500", color: "rgb(65, 65, 65)" }}>Third-Party Links</span>
                    <br></br>
                    Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these external sites. We encourage users to review the privacy policies of these third-party platforms before providing any personal information.
                </p>

                <p style={{textAlign:"left", color: "grey" }}><span style={{ fontSize: "18px", fontWeight: "500", color: "rgb(65, 65, 65)" }}>Updates to the Privacy Policy</span>
                    <br></br>
                    We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on our website, and it is the users' responsibility to review the Privacy Policy periodically for any updates.
                </p>

                <p style={{textAlign:"left", color: "grey" }}><span style={{ fontSize: "18px", fontWeight: "500", color: "rgb(65, 65, 65)" }}>Contact Us</span>
                    <br></br>
                    If you have any questions, concerns, or requests regarding our Privacy Policy or the handling of your personal information, please contact us at [contact information].
                </p>

                <p style={{textAlign:"left", color: "grey" }}>
                    By using our website and services, you agree to the terms and conditions outlined in this Privacy Policy.

                </p>
            </div>
            <Footer />
        </>
    )
}

export default PrivacyPolicy
