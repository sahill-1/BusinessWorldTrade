import React from 'react'
import "./Footer.css";
import logo from '../images/bwt-dark.png';
import { FaTelegram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "bootstrap"

const Footer = () => {
    const style={
        textDecoration:"none",
        color:"#5a5a5a",
        fontWeight:600
        }
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

            <div className=' d-flex justify-content-center w-100 '><hr></hr></div>

            <div className='sb__footer section__padding'>

                <div className='sb__footer-links'>

                    <div className='sb__footer-links_div'>
                        <h4>ABOUT US</h4>
                        <Link to='/about-us'  style={style}><p>About Us</p></Link>
                        <Link to='/career' style={style}><p>Career</p></Link>
                        <Link to='/faq' style={style}><p>FaQ</p></Link>
                        <Link to='/privacy-policy' style={style}><p>Privacy & Policy</p></Link>
                        <Link to='/contact-us' style={style}><p>Contct Us</p></Link>
                        <Link to='/blog' style={style}><p>Blog</p></Link>
                    </div>

                    <div className='sb__footer-links_div'>
                        <h4>OUR SERVICES</h4>
                        <Link to='/advertise-with-us' style={style}><p>Advertise With Us</p></Link>
                        <Link to='/loan' style={style}><p>Business Loan</p></Link>
                        <Link to='/insurance' style={style}><p>Business Insurance</p></Link>
                        <Link to='/iso-certification' style={style}><p>ISO Certification</p></Link>
                        <Link to='/e-filling' style={style}><p>E-Filing</p></Link>
                    </div>

                    <div className='sb__footer-links_div'>
                        <h4>CATEGORIES</h4>
                        <a href='/' style={style}><p>Electronics</p></a>
                        <a href='/' style={style}><p>Mobiles & Tablets</p></a>
                        <a href='/' style={style}><p>Apparel & Fashion</p></a>
                        <a href='/' style={style}><p>Spices</p></a>
                        <a href='/' style={style}><p>Fruits & Vegetables</p></a>
                        <a href='/' style={style}><p>Oil</p></a>
                    </div>

                    <div className='sb__footer-links_div'>
                        <h4>BUYER</h4>
                        <a href='/' style={style}><p>Post By Requirement</p></a>
                        <a href='/' style={style}><p>Search Supplier</p></a>
                        <Link to='/request-callback' style={style}><p>Request Callback</p></Link>
                        
                    </div>
                    <div className='sb__footer-links_div'>
                        <h4>SELLER</h4>
                        <a href='/' style={style}><p>Search Buy Leads</p></a>
                        <a href='/' style={style}><p>Get Frieght Quotes</p></a>
                        <a href='/' style={style}><p>Logistics</p></a>
                        <Link to='/iso-certification' style={style}><p>ISO Certification</p></Link>
                    </div>
                </div>

            </div>
<div className=' d-flex justify-content-center w-100'><hr></hr></div>
            

            <div className='sb__footer-below'>

                <div className='sb__footer-copyright' style={{marginTop:"14px"}}>
                    <p>
                        @{new Date().getFullYear()} Business World Trade. All rights reserved.
                    </p>
                </div>

                <div className='sb__footer-below-links' style={{marginTop:"14px"}}>
                    <Link to='./' style={style}><div><p>Terms & Conditions</p></div></Link>
                    <Link to='/privacy-policy' style={style}><div><p>Privacy Policy</p></div></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
