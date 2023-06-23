import './App.css';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
// import FooterMain from './Components/FooterPages/FooterMain';
// import Footer from './Components/Homepage/Footer';
// import NavbarHeader from './Components/Homepage/Navbar';
// import ProductPage from './Components/ProductPage';
import LogIn from './Components/LogIn/LogIn'
import HomePage from "./Components/HomePage";
import RegistrationForm from './Components/Registration/RegistrationForm';
import AboutUS from './Components/FooterPages/AboutUS';
import Career from './Components/FooterPages/Career';
import FAQ from './Components/FooterPages/FAQ';
import PrivacyPolicy from './Components/FooterPages/PrivacyPolicy';
import Contact from './Components/FooterPages/ContactUs';
import Blog from './Components/FooterPages/Blog';
import AdvertiseWithUs from './Components/FooterPages/AdvertiseWithUs';
import {BussinessLoan}  from './Components/FooterPages/BussinessLoan';
import {BussinessInsuarance } from './Components/FooterPages/BussinessInsuarance'
import {BWTISOCertification} from './Components/FooterPages/BWTISOCertification'
import {EFilling} from './Components/FooterPages/E-Filling'
import {Callback} from './Components/FooterPages/Callback'
import {SellerISOCertification} from './Components/FooterPages/SellerISOCertification'
import { Checkout } from './Components/FooterPages/Checkout';

function App() {
    return (
      <div className="App">
         
        <Router>
          <Routes>
          <Route path='/' element={<HomePage/>}/>
            <Route path='login' element={<LogIn/>}/>
            <Route path='register' element={<RegistrationForm/>}/>
            <Route path='/about-us' element={<AboutUS/>}/>
            <Route path='/career' element={<Career/>}/>
            <Route path='/faq' element={<FAQ/>}/>
            <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
            <Route path='/contact-us' element={<Contact/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/advertise-with-us' element={<AdvertiseWithUs/>}/>
            <Route path='/loan' element={<BussinessLoan/>}/>
            <Route path='/insurance' element={<BussinessInsuarance/>}/>
            <Route path='/iso-certification' element={<BWTISOCertification/>}/>
            <Route path='/e-filling' element={<EFilling/>}/>
            <Route path='/request-callback' element={<Callback/>}/>
            <Route path='/iso-certification' element={<SellerISOCertification/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
        </Router>
        
      </div>
  );
};

export default App;