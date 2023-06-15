import React from 'react'
import NavbarHeader from '../Homepage/Navbar'
import Footer from '../Homepage/Footer'
import background from '../images/contact-banner.jpg'
import payment from '../images/WhatsAp.jpeg'
export const Checkout = () => {
  return (
    <>
    <NavbarHeader/>
    <>
  {/* about banner start */}
  <div className="container-fluid contactus-banner gap py-5" style={{
    backgroundImage: `url(${background})`,
    backgroundRepeat:" no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
    }}>
    <div className="row py-5">
      <div className="col-12 text-center text-light pt-3">
        <h5 style={{fontSize:"30px",fontWeight:"bold"}}>EASY AND SECURE PAYMENT PROCESS</h5>
      </div>
      <div className="col-12 text-center text-light pb-3 banner-head" >
        <h1 style={{
         fontFamily: 'Poppins, sans-serif',
    fontWeight: '800 ',
    color:"white"
    }}> PAYMENT </h1>
      </div>
    </div>
  </div>
  {/* about banner start */}
  {/* middle part start */}
  <div className="container-fluid py-5">
    <div className="row">
      <div className="col-sm-12 col-md-6 py-5 px-4">
        <p>
          Secure Payment Processing: We ensure that your payments are processed
          securely using industry-standard encryption and security measures.
          Trusted Payment Gateways: We use reputable payment gateways like
          PayPal, and others for secure transactions.
        </p>
        <p>
          SSL Certificate: We have a valid SSL certificate, encrypting your
          sensitive information during transmission to protect against
          unauthorized access. Data Privacy: Your personal and payment
          information will be handled with strict confidentiality and will not
          be shared with third parties.
        </p>
        <p>
          Fraud Detection and Prevention: We employ advanced fraud monitoring
          systems and manual review processes to detect and prevent fraudulent
          transactions. Customer Support: Our dedicated support team is
          available to assist you with any concerns or questions regarding
          payments or security.
        </p>
      </div>
      <div className="col-sm-12 col-md-6">
        <img
          src={payment}
          className="img-fluid"
          alt="downloading..."
        />
      </div>
    </div>
  </div>
  {/* middle part end */}
</>

    <Footer/>
    </>
  )
}
