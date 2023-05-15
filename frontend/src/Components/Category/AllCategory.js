import React from 'react'
import Navbar from "../Homepage/Navbar";
import CtgAgriculture from './CtgAgriculture';
import CtgSpices from './CtgSpices';
import CtgApparel from './CtgApparel';
import CtgBeverages from './CtgBeverages';
import Footer from "../Homepage/Footer";

const AllCategory = () => {
  return (
    <>
    <Navbar />
    <CtgAgriculture/>
    <CtgSpices />
    <CtgApparel/>
    <CtgBeverages />
    <Footer/>
    
    </>
  )
}

export default AllCategory
