import React from 'react'
import "./Footer.css";
import logo from '../images/bwt-dark.png';
import { FaTelegram } from "react-icons/fa";
import { Link } from 'react-router-dom';
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
                        <Link to='/about-us'><p>About Us</p></Link>
                        <Link to='/career'><p>Career</p></Link>
                        <Link to='/faq'><p>FaQ</p></Link>
                        <Link to='/privacy-policy'><p>Privacy & Policy</p></Link>
                        <Link to='/contact-us'><p>Contct Us</p></Link>
                        <Link to='/blog'><p>Blog</p></Link>
                    </div>

                    <div className='sb__footer-links_div'>
                        <h4>OUR SERVICES</h4>
                        <Link to='/advertise-with-us'><p>Advertise With Us</p></Link>
                        <Link to='/loan'><p>Business Loan</p></Link>
                        <Link to='/insurance'><p>Business Insurance</p></Link>
                        <Link to='/iso-certification'><p>ISO Certification</p></Link>
                        <Link to='/e-filling'><p>E-Filing</p></Link>
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
                        <Link to='/request-callback'><p>Request Callback</p></Link>
                        
                    </div>
                    <div className='sb__footer-links_div'>
                        <h4>SELLER</h4>
                        <a href='/'><p>Search Buy Leads</p></a>
                        <a href='/'><p>Get Frieght Quotes</p></a>
                        <a href='/'><p>Logistics</p></a>
                        <Link to='/iso-certification'><p>ISO Certification</p></Link>
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
                    <Link to='./'><div><p>Terms & Conditions</p></div></Link>
                    <Link to='/privacy-policy'><div><p>Privacy Policy</p></div></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
