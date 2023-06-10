import React from 'react';
import "./FooterMain.css";
// import AboutUS from './AboutUS';
import PrivacyPolicy from './PrivacyPolicy';
import Career from './Career';
import FAQ from './FAQ';
import Blog from './Blog';
import ContactUs from './ContactUs';

const FooterMain = () => {
  return (
    <div>
      {/* <AboutUS/> */}
      {/* <PrivacyPolicy /> */}
      {/* <Career /> */}
      <FAQ/>
      <Blog/>
      <ContactUs />
    </div>
  )
}

export default FooterMain;
