import './App.css';
import TopSuppliers from './Components/TopSuppliers';
import FoodBeverage from './Components/FoodBeverage';
import ApparelsFashions from './Components/ApparelsFashions';
import Pharmaceuticals from './Components/Pharmaceuticals';
import FeaturedProducts from './Components/FeaturedProducts';
import ShopWithUs from './Components/ShopWithUs';
import Testimonial from './Components/Testimonial';
import Footer from "./Components/Footer"
import AgricultureProducts from './Components/AgricultureProducts';

function App() {
  return (
    <div className="App">
      <FeaturedProducts/>
      <TopSuppliers/>
      <AgricultureProducts />
      <FoodBeverage/>
      <ApparelsFashions/>
      <Pharmaceuticals/>
      <ShopWithUs/>
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;