import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import RegistrationForm from "./Components/Registration/RegistrationForm";
// import "./frontend.css";
// import PrivateRoute from "./privateroutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// *******************HOME PAGE PATHS***************************
// import "./Cssfiles/Home.css";
// import FloatingAction from "./Components/FloatingAction";
// import ProductCategory from "./MainProducts/ProductCategory";
// import ProductSubCategory from "./MainProducts/ProductSubCat";
// import ProductInnerSubCategory from "./MainProducts/ProductInnerSubCategory";
// import ProductList from "./MainProducts/ProductList";
// import ProductDetails from "./Components/ProductPage";
// *! *******************END OF HOME PAGE PATHS***************************
// *! *******************SELLER PANEL PAGE PATHS***************************
// import Sidenav from "./sellerdashboard/Sidenav";
// import SellerHeader from "./sellerdashboard/Header";
// import SellerHome from "./sellerdashboard/Home";
// import Service from "./sellerdashboard/servicepackage";
// import Leaddesk from "./sellerdashboard/leaddesk";
// import ContactProfile from "./sellerdashboard/ContactProfile";
// import Productdetails from "./sellerdashboard/productrelevant";
// import Catalog from "./sellerdashboard/catalog";
// import Notifications from "./sellerdashboard/notificaationsetting";
// import Currentlead from "./sellerdashboard/currentleads";
// import Shortlist from "./sellerdashboard/shortlisted";
// import ManageProduct from "./sellerdashboard/manageproducts";
// import Editmanageproducts from "./sellerdashboard/editmanageproducts";
// import AddProduct from "./sellerdashboard/AddProduct";
// *! *******************END OF SELLER PANEL PAGE PATHS***************************
// *! *******************ADMIN PANEL PAGE PATHS***************************
// import AdminFooter from "./admincomponents/";
// import AdminHeader from "./admincomponents/AdminHeader";
// import AdminDashHome from "./admincomponents/AdminHome";
// import AdminSidenav from "./admincomponents/AdminSidenav";
// import PopupCallInquiries from "./admincomponents/PopupCallInquiries";
// import ProductInquiries from "./admincomponents/ProductInquiries";
// import BusinessInquiries from "./admincomponents/BusinessInquiries";
// import FreightsEnquiries from "./admincomponents/FreightsEnquiries";
// import FeedbackInquiries from "./admincomponents/FeedbackInquiries";
// import EFilings from "./admincomponents/EFilings";
// import LogisticsInquiries from "./admincomponents/LogisticsInquiries";
// import ExportInquiries from "./admincomponents/ExportInquiries";
// import ServicesProviderEnquiries from "./admincomponents/ServicesProviderEnquiries";
// import GeneralSettings from "./admincomponents/GeneralSettings";
// import SlideshowSettings from "./admincomponents/SlideshowSettings";
// import Buyer from "./admincomponents/Buyer";
// import Sellers from "./admincomponents/sellers";
// import AddCategory from "./admincomponents/ParentCategory";
// import Subcategory from "./admincomponents/Subcategory";
// import InnerSubcategory from "./admincomponents/InnerSubcategory";
// import LastSubcategory from "./admincomponents/LastSubCategory";
// import ManageProducts from "./admincomponents/ManageProducts";
// import ViewPages from "./admincomponents/ViewPages";
// import EditPages from "./admincomponents/EditPages";
// import Packagetag from "./admincomponents/Packagetag";
// import BlogCategory from "./admincomponents/BlogCategory";
// import BlogPost from "./admincomponents/BlogPost";
// import AddBlogPost from "./admincomponents/AddBlogPost";
// import EditBlogPost from "./admincomponents/EditBlogPost";
// import FtaEnquries from "./admincomponents/FtaEnquries";
// import WorldTrust from "./admincomponents/WorldTrust";
// import IsoCertification from "./admincomponents/IsoCertification";
// import PostBuyRequirement from "./admincomponents/PostBuyRequirement";
// import AdminAddProduct from "./admincomponents/AddProduct";
// import AdminLogin from "./admincomponents/AdminLogin";
// import Forgotpassword from "./UserAuthentication/Forgotpassword";
// import VerificationSignin from "./UserAuthentication/VerificationSignin";
// import ResetConfirmPassowrd from "./UserAuthentication/ResetConfirmPassowrd";
// import Blog from "./Components/FooterPages/Blog";
// import BlogDetails from "./Components/FooterPages/BlogDetails.jsx";
// import LogIn from "./Components/LogIn/LogIn";
// import Logout from "./Components/LogIn/Logout";
// import HomePage from "./Components/HomePage";
// import AboutUS from "./Components/FooterPages/AboutUS";
// import Career from "./Components/FooterPages/Career";
// import FAQ from "./Components/FooterPages/FAQ";
// import PrivacyPolicy from "./Components/FooterPages/PrivacyPolicy";
// import SearchBuyLead from "./Components/FooterPages/SeachBuyLead";
// import Contact from "./Components/FooterPages/ContactUs";
// import AdvertiseWithUs from "./Components/FooterPages/AdvertiseWithUs";
// import { BussinessLoan } from "./Components/FooterPages/BussinessLoan";
// import { BussinessInsuarance } from "./Components/FooterPages/BussinessInsuarance";
// import { BWTISOCertification } from "./Components/FooterPages/BWTISOCertification";
// import { EFilling } from "./Components/FooterPages/E-Filling";
// import { Callback } from "./Components/FooterPages/Callback";
// import SellerISOCertification from "./Components/FooterPages/SellerISOCertification";
// import { SellerfreightQuotes } from "./Components/FooterPages/FreightQuotes";
// import { Checkout } from "./Components/FooterPages/Checkout";
// import { PostbyRequirement } from "./Components/FooterPages/PostbyRequirement";
// import { Logistics } from "./Components/FooterPages/Logistics";
// import { SellerSearch } from "./Components/FooterPages/SellerSearch";
// import { Sapphire } from "./Components/FooterPages/Benefits/Sapphire";
// import { Bronze } from "./Components/FooterPages/Benefits/Bronze";
// import { Diamond } from "./Components/FooterPages/Benefits/Diamond";
// import { Gold } from "./Components/FooterPages/Benefits/Gold";
// import { Platinum } from "./Components/FooterPages/Benefits/Platinum";
// import { Premium } from "./Components/FooterPages/Benefits/Premium";
// import { Silver } from "./Components/FooterPages/Benefits/Silver";
// import { Star } from "./Components/FooterPages/Benefits/Star";
// import AllCategory from "./Components/Category/AllCategory";
// import SubCategory from "./Components/Category/SubCategory";
// import SubSubCategory from "./Components/Category/SubSubCategory";
// import ProductUploadForm from "./Components/ProductUploadForm";
// import AllProductsPage from "./Components/Category/AllProductsPage";
// import VideoTestimonials from "./Components/FooterPages/VideoTestimonials";
// import AdminDashHome from "./admincomponents/AdminHome";
// import Packges from "./sellerdashboard/Packge";
// import CategoryPage from "./Components/Category/SubCategory";
// import SubSubCategoryPage from "./Components/Category/AllProductsPage";
// import ParentCategories from "./Components/Category/AllProductsPage";
// import SubcategoryDetailsPage from "./Components/Category/AllProductsPage";
// import SubCategoryPage from "./Components/Category/SubSubCategory";
// import ProductInq from "./Components/productsInq/productInq";
// import SideBar from "./Components/Category/sideBar";
// import ProductForm from "./Components/products/Product";

function App() {
  let user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return (
    <>
      <RegistrationForm />
      {/* <Router>
        <Routes>
          <Route
            path="/seller"
            element={
              <>
                <SellerHeader />
                <Sidenav />
              </>
            }
          />

          <Route
            path="/sellerhome"
            element={
              <>
                <SellerHeader />
                <Sidenav />
                <SellerHome />
              </>
            }
          />

          <Route
            path="/packges"
            element={
              <>
                <SellerHeader />
                <Sidenav />
                <Packges />
              </>
            }
          />
          <Route
            path="/contactprofile"
            element={
              <>
                <SellerHeader />
                <Sidenav />
                <ContactProfile />
              </>
            }
          />

          <Route
            path="/leadesk"
            element={
              <>
                <SellerHeader />
                <Sidenav />
                <Leaddesk />
              </>
            }
          />

          <Route path="/Productdetails" element={<Productdetails />} />

          <Route
            path="/servicepackage"
            element={
              <>
                <SellerHeader />
                <Sidenav />
                <Service />
              </>
            }
          />

          <Route
            path="/currentleads"
            role="Seller"
            element={
              <>
                <SellerHeader />
                <Sidenav />
                <Currentlead />
              </>
            }
          />
          <Route
            path="/Notifications"
            role="Seller"
            element={
              <>
                <SellerHeader />
                <Sidenav />
                <Notifications />
              </>
            }
          />
          <Route
            path="/shortlisted"
            role="Seller"
            element={
              <>
                <SellerHeader />
                <Sidenav />
                <Shortlist />
              </>
            }
          />
      
          <Route
            path="/sellermanageproducts"
            role="Seller"
            element={
              <>
                <ManageProducts />
              </>
            }
          />
          <Route
            path="/Editmanageproducts/:id"
            role="Seller"
            element={
              <>
                <SellerHeader />
                <Sidenav />
                <Editmanageproducts />
              </>
            }
          />
          <Route
            path="/addproduct"
            role="Seller"
            element={
              <>
                <SellerHeader />
                <Sidenav />
                <AddProduct />{" "}
              </>
            }
          />
          <Route
            path="/catalog"
            role="Seller"
            element={
              <>
                <SellerHeader />
                <Sidenav />
                <Catalog />{" "}
              </>
            }
          />
        </Routes>
      
        <Routes>
          <Route
            path="/product-category"
            element={
              <>
              </>
            }
          />
          <Route
            path="/sellerAuth"
            element={
              <>
              </>
            }
          />
          <Route
            path="/sllerH"
            element={
              <>
                {" "}
              </>
            }
          />
          <Route
            path="/product-subcat"
            element={<ProductSubCategory />}
          />
          <Route
            path="/product-inner-sub-cat"
            element={<ProductInnerSubCategory />}
          />
          <Route
            path="/Product-List"
            element={<ProductList />}
          />
          
          <Route
            path="/Privacypolicy"
          />
          <Route
            path="/Termcondition"
          />
        </Routes>

        <Routes>
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/callbackenq"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <PopupCallInquiries />{" "}
              </>
            }
          />
          <Route
            path="/productenq"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <ProductInquiries />
              </>
            }
          />
          <Route
            path="/businessenq"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <BusinessInquiries />
              </>
            }
          />
          <Route
            path="/add-product"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <AdminAddProduct />
              </>
            }
          />
          <Route
            path="/PostBuyRequirements"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <PostBuyRequirement />
              </>
            }
          />
          <Route
            path="/freightsenq"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <FreightsEnquiries />
              </>
            }
          />
          <Route
            path="/feedbackenq"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <FeedbackInquiries />
              </>
            }
          />
          <Route
            path="/Efilinsenq"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <EFilings />
              </>
            }
          />
          <Route
            path="/Logisticsenq"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <LogisticsInquiries />
              </>
            }
          />
          <Route
            path="/Exportenq"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <ExportInquiries />
              </>
            }
          />
          <Route
            path="/servicesenq"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <ServicesProviderEnquiries />
              </>
            }
          />
          <Route
            path="/GeneralSettings"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <GeneralSettings />
              </>
            }
          />
          <Route
            exact
            path="/SlideshowSettings"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <SlideshowSettings />
              </>
            }
          />
          <Route
            path="/sellers"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <Sellers />
              </>
            }
          />
          <Route
            path="/buyer"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <Buyer />
              </>
            }
          />
          <Route
            path="/addcategory"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <AddCategory />
              </>
            }
          />

          <Route
            path="/addsubcategory"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <Subcategory />
              </>
            }
          />
          <Route
            path="/addinnersubcategory"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <InnerSubcategory />
              </>
            }
          />
          <Route
            path="/addlastsubcategory"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <LastSubcategory />
              </>
            }
          />
          <Route
            path="/manageproducts"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <ManageProducts />
              </>
            }
          />
          <Route
            path="/blogcategory"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <BlogCategory />
              </>
            }
          />
          <Route
            path="/blogposts"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <BlogPost />
              </>
            }
          />
          <Route
            path="/pages"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <ViewPages />
              </>
            }
          />
          <Route
            path="/addBlogpost"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <AddBlogPost />
              </>
            }
          />
          <Route
            path="/editBlogpost"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <EditBlogPost />
              </>
            }
          />
          <Route
            path="/editpages"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <EditPages />
              </>
            }
          />
          <Route
            path="/packagetag"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <Packagetag />
              </>
            }
          />
          <Route
            path="/ftaEnquries"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <FtaEnquries />
              </>
            }
          />
          <Route
            path="/WorldTrust"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <WorldTrust />
              </>
            }
          />
          <Route
            path="/IsoCertification"
            element={
              <>
                <AdminHeader />
                <AdminSidenav />
                <IsoCertification />
              </>
            }
          />
          <Route path="/logout" component={Logout} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/uservalidate" element={<VerificationSignin />} />
          <Route path="/confirmpassowrd" element={<ResetConfirmPassowrd />} />
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LogIn />} />
          <Route path="register" element={<RegistrationForm />} />
          <Route path="/about-us" element={<AboutUS />} />
          <Route path="/career" element={<Career />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/search-buy-leads" element={<SearchBuyLead />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/details/:id" element={<BlogDetails />} />
          <Route path="/advertise-with-us" element={<AdvertiseWithUs />} />
          <Route path="/loan" element={<BussinessLoan />} />
          <Route path="/insurance" element={<BussinessInsuarance />} />
          <Route path="/iso-certification" element={<BWTISOCertification />} />
          <Route path="/e-filling" element={<EFilling />} />
          <Route path="/request-callback" element={<Callback />} />
          <Route path="freight-quotes" element={<SellerfreightQuotes />} />
          <Route
            path="/seller-iso-certification"
            element={<SellerISOCertification />}
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/post-by-requirement" element={<PostbyRequirement />} />
          <Route path="/search-supplier" element={<SellerSearch />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/sapphire" element={<Sapphire />} />
          <Route path="/bronze" element={<Bronze />} />
          <Route path="/diamond" element={<Diamond />} />
          <Route path="/gold" element={<Gold />} />
          <Route path="/platinum" element={<Platinum />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/silver" element={<Silver />} />
          <Route path="/star" element={<Star />} />
          <Route path="/categories" element={<AllCategory />} />
          <Route
            path="/category/:categoryId/:categoryName"
            element={<CategoryPage />}
          />
          <Route
            path="/parent-category/:categoryId/:parentId"
            element={<AllProductsPage />}
          />
          <Route path="/category/:categoryId" element={<SubSubCategory />} />
          <Route path="/product-page" element={<ProductDetails />} />
          <Route path="/category-products" element={<AllProductsPage />} />
          <Route path="/sub-categories" element={<SubCategory />} />
          <Route path="/product-upload" element={<ProductUploadForm />} />
          <Route path="/video-testimonials" element={<VideoTestimonials />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
