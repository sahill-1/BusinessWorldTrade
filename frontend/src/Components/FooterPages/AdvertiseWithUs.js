import React from 'react';
import payslip from "../images/payslip.pdf";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import { wrap } from 'framer-motion';
const AdvertiseWithUs = () => {
  return (
    <>
    <Navbar />
        <h2 className='privacy-policy my-3'>
            Advertise With Us
        </h2>
        <div className='advertise-with-us' style={{width:"80%", margin:"auto", height:"auto", border:"1px solid blue", display:"flex", flexWrap:"wrap", justifyContent:"space-evenly", gap:"40px"
      }}>
          <div className='advertise-with-us-div' style={{width:"30%", height:"30vh", border:'1px solid red'}}></div>
          <div className='advertise-with-us-div' style={{width:"30%", height:"30vh", border:'1px solid red'}}></div>
          <div className='advertise-with-us-div' style={{width:"30%", border:'1px solid red'}}></div>
          <div className='advertise-with-us-div' style={{width:"30%",height:"30vh", border:'1px solid red'}}></div>
          <div className='advertise-with-us-div' style={{width:"30%", border:'1px solid red'}}></div>
          <div className='advertise-with-us-div' style={{width:"30%", border:'1px solid red'}}></div>
          <div className='advertise-with-us-div' style={{width:"30%", border:'1px solid red'}}></div>
        </div>
    <Footer />
    </>
  )
}

export default AdvertiseWithUs
