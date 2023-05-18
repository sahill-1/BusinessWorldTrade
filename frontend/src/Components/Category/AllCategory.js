import React from 'react'
import Navbar from "../Homepage/Navbar";
import CtgAgriculture from './CtgAgriculture';
import CtgApparel from './CtgApparel';
import CtgBeverages from './CtgBeverages';
import CtgSpices from './CtgSpices';
import Footer from "../Homepage/Footer";
import CtgPharmaceuticals from './CtgPharmaceuticals';

const AllCategory = () => {
  return (
    <>
    <Navbar />
    <CtgAgriculture/>
    <CtgApparel/>
    <CtgBeverages />
    <CtgSpices />
    <CtgPharmaceuticals />
    <Footer/>
    </>
  )
}

export default AllCategory
