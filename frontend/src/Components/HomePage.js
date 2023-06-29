import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import formReducer from "./Homepage/reducers";
import Navbar from "./Homepage/Navbar";
import Header from "./Homepage/Header";
import FormHomepage from "./Homepage/FormHomepage";
import TopCategory from "./Homepage/TopCategory"
import FeaturedProducts from "./Homepage/FeaturedProducts";
import TopSuppliers from "./Homepage/TopSuppliers";
import AgricultureProducts from "./Homepage/AgricultureProducts";
import FoodBeverage from "./Homepage/FoodBeverage";
import ApparelsFashions from "./Homepage/ApparelsFashions";
import Pharmaceuticals from "./Homepage/Pharmaceuticals";
import AboutMe from './Homepage/AboutMe';
import ShopWithUs from "./Homepage/ShopWithUs";
import Testimonial from "./Homepage/Testimonial";
import Footer from "./Homepage/Footer";

const store = createStore(formReducer);     

const HomePage = () => {
  return (
    <>
      <Navbar /> 
      <Header />

      <Provider store={store}>
        <FormHomepage />
      </Provider>
    
      <TopCategory />
      <FeaturedProducts />
      <TopSuppliers />
      <AgricultureProducts />
      <FoodBeverage />
      <ApparelsFashions />
      <Pharmaceuticals />
      <AboutMe />
      <ShopWithUs />
      <Testimonial />
      <Footer />
    </>
  )
}

export default HomePage;
