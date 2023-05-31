import React from 'react'
import Navbar from "../Homepage/Navbar";
import CtgAgriculture from './CtgAgriculture';
import CtgApparel from './CtgApparel';
import CtgBeverages from './CtgBeverages';
import CtgSpices from './CtgSpices';
import CtgPharmaceuticals from './CtgPharmaceuticals';
import CtgHardware from './CtgHardware';
import Footer from "../Homepage/Footer";
import CtgOilFuel from './CtgOilFuel';
import CtgChemicals from './CtgChemicals';
import CtgAutomobile from './CtgAutomobile';

const AllCategory = () => {
  return (
    <>
    <Navbar />
    <CtgAgriculture/>
    <CtgApparel/>
    <CtgBeverages />
    <CtgSpices />
    <CtgPharmaceuticals />
    <CtgHardware />
    <CtgOilFuel/>
    <CtgChemicals/>
    <CtgAutomobile/>
    <Footer/>
    </>
  )
}

export default AllCategory
