import React from 'react'
import "./Footer.css";
import logo from '../images/bwt-dark.png';
import { FaTelegram } from "react-icons/fa";
import "bootstrap"

const Footer = () => {
    return (
        <div className='footer'>

            <div className='footer-top-section'>
                <img src={logo} alt='name' style={{ width: "250px", height: "100px" }} />

                <div className='newsletter-section'>
                    <h5 style={{ textAlign: "left", fontWeight: "600", color: "#2b5c77", paddingTop: "5px", fontSize: "23px" }}>Newsletter</h5>
                    <div className='newsletter-section-div'>
                        <input placeholder='Email Address' />
                        <button><FaTelegram style={{ fontSize: "40px", color: "#ff6a00" }}/> </button>
                    </div>
                </div>
            </div>

            <hr></hr>

            <div className='sb__footer section__padding'>

                <div className='sb__footer-links'>

                    <div className='sb__footer-links_div'>
                        <h4>ABOUT US</h4>
                        <a href='/'><p>About Us</p></a>
                        <a href='/'><p>Career</p></a>
                        <a href='/'><p>FAQ</p></a>
                        <a href='/'><p>Privacy & Policy</p></a>
                        <a href='/'><p>Contact Us</p></a>
                        <a href='/'><p>Blog</p></a>
                    </div>

                    <div className='sb__footer-links_div'>
                        <h4>OUR SERVICES</h4>
                        <a href='/'><p>Advertise With Us</p></a>
                        <a href='/'><p>Business Loan</p></a>
                        <a href='/'><p>Business Insurance</p></a>
                        <a href='/'><p>ISO Certification</p></a>
                        <a href='/'><p>E-Filing</p></a>
                    </div>

                    <div className='sb__footer-links_div'>
                        <h4>CATEGORIES</h4>
                        <a href='/'><p>Electronics</p></a>
                        <a href='/'><p>Mobiles & Tablets</p></a>
                        <a href='/'><p>Apparel & Fashion</p></a>
                        <a href='/'><p>Spices</p></a>
                        <a href='/'><p>Fruits & Vegetables</p></a>
                        <a href='/'><p>Oil</p></a>
                    </div>

                    <div className='sb__footer-links_div'>
                        <h4>BUYER</h4>
                        <a href='/'><p>Post By Requirement</p></a>
                        <a href='/'><p>Search Supplier</p></a>
                        <a href='/'><p>Request Callback</p></a>
                        
                    </div>
                    <div className='sb__footer-links_div'>
                        <h4>SELLER</h4>
                        <a href='/'><p>Search Buy Leads</p></a>
                        <a href='/'><p>Get Frieght Quotes</p></a>
                        <a href='/'><p>Logistics</p></a>
                        <a href='/'><p>ISO Certification</p></a>
                    </div>

                </div>

            </div>

            <hr></hr>

            <div className='sb__footer-below'>

                <div className='sb__footer-copyright' style={{marginTop:"14px"}}>
                    <p>
                        @{new Date().getFullYear()} Business World Trade. All rights reserved.
                    </p>
                </div>

                <div className='sb__footer-below-links' style={{marginTop:"14px"}}>
                    <a href='./'><div><p>Terms & Conditions</p></div></a>
                    <a href='./'><div><p>Privacy Policy</p></div></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
