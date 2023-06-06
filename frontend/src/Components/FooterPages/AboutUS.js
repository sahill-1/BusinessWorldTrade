import React from 'react'
import Navbar from "../Homepage/Navbar";
import Footer from '../Homepage/Footer';
const AboutUS = () => {
    return (
        <div>
            <Navbar />
            <div className='about-us-first-div my-5' >
                <div className='about-us-first-div-left'>
                    <h2 style={{ color: "#21496c" }}>Making Indian MSMEs</h2>
                    <h2><span style={{ color: "red" }}>Digitally </span><span style={{ color: "#f3c110" }} >Saksham</span></h2>
                    <p>We are one of <span style={{color:"#464545"}}>India’s largest and oldest B2B platforms</span> India’s largest and oldest B2B platforms that
                        connects buyers and suppliers to create a customer-driven value chain for
                        all businesses, including SMEs, large enterprises, and individuals.</p>
                    <p>We integrate businesses into global value chains by bringing them together
                        from across the world, on a single platform to interact and conduct the
                        business smoothly, securely, and effectively.
                    </p>
                </div>
                <div className='about-us-first-div-right'> </div>
            </div>
            <div className='about-us-second-div'>
                <div className='about-us-second-div-block'>
                    <div className='about-us-second-div-block-left'>

                    </div>
                    <div className='about-us-second-div-block-right'>

                    </div>
                </div>
                <div className='about-us-second-div-block'></div>
                <div className='about-us-second-div-block'></div>
            </div>
            <Footer />
        </div>

    )
}
export default AboutUS
