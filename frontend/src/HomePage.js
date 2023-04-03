import React from 'react'
import Navbar from "./Components/Homepage/Navbar";
import Header from "./Components/Homepage/Header";
import FormHomepage from "./Components/Homepage/FormHomepage";
import TopCategory from "./Components/Homepage/TopCategory"
import FeaturedProducts from "./Components/Homepage/FeaturedProducts"
import TopSuppliers from "./Components/Homepage/TopSuppliers";
import AgricultureProducts from "./Components/Homepage/AgricultureProducts";
import FoodBeverage from "./Components/Homepage/FoodBeverage";
import ApparelsFashions from "./Components/Homepage/ApparelsFashions";
import Pharmaceuticals from "./Components/Homepage/Pharmaceuticals";
import AboutMe from './Components/Homepage/AboutMe';
import ShopWithUs from "./Components/Homepage/ShopWithUs";
import Testimonial from "./Components/Homepage/Testimonial";
import Footer from "./Components/Homepage/Footer";



const HomePage = () => {
  return (
    <>
    <Navbar />
    <Header />
    <FormHomepage />
    <TopCategory />
    <FeaturedProducts/>
    <TopSuppliers/>
    <AgricultureProducts />
    <FoodBeverage/>
    <ApparelsFashions/>
    <Pharmaceuticals/>
    <AboutMe />
    <ShopWithUs/>
    <Testimonial />
    <Footer />
    </>
  )
}

export default HomePage
