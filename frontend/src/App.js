import './App.css';
// import ProductPage from './Components/ProductPage';
import HomePage from "./Components/HomePage";
// import RegistrationForm from './Components/Registration/RegistrationForm';
// import LogIn from './Components/LogIn/LogIn';
// import AllCategory from './Components/Category/AllCategory';
// import SubCategory from './Components/SubCategory.js/SubCategory';
import Modal from './Components/Modal/Modal';
function App() {
    return (
      <div className="App">
        {/* <ProductPage /> */}
        <HomePage />
        {/* <RegistrationForm/> */}
        {/* <LogIn/> */}
        {/* <AllCategory/>  */}
        {/* <SubCategory/> */}
        <Modal />
      </div>
  );
};

export default App;