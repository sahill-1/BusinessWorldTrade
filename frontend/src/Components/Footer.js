import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>

        <div className='footer-top-section'>
            <img src='./bwt-dark' alt='error' />
        </div>

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
                    <h4>PARTNERS</h4>
                    <a href='/'><p>partners</p></a>
                    <a href='/'><p>partners</p></a>
                    <a href='/'><p>partners</p></a>
                    <a href='/'><p>partners</p></a>
                    <a href='/'><p>partners</p></a>
                    <a href='/'><p>partners</p></a>
                </div>

            </div>

        </div>

        <hr></hr>

        <div className='sb__footer-below'>

            <div className='sb__footer-copyright'>
                <p>
                    @{new Date().getFullYear()} Business World Trade. All rights reserved.
                </p>
            </div>

            <div className='sb__footer-below-links'>
                <a href='./'><div><p>Terms & Conditions</p></div></a>
                <a href='./'><div><p>Privacy Policy</p></div></a>
            </div>
        </div>
    </div>
  )
}

export default Footer
