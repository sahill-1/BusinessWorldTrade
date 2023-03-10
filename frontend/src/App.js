import './App.css';
import AgricultureProducts from './Components/AgricultureProducts';
import TopSuppliers from './Components/TopSuppliers';
import FoodBeverage from './Components/FoodBeverage';
import ApparelsFashions from './Components/ApparelsFashions';
import Pharmaceuticals from './Components/Pharmaceuticals';
import FeaturedProducts from './Components/FeaturedProducts';
import ShopWithUs from './Components/ShopWithUs';

function App() {
  return (
    <div className="App">
      <ShopWithUs/>
      <FeaturedProducts/>
      <TopSuppliers/>
      <AgricultureProducts/>
      <FoodBeverage/>
      <ApparelsFashions/>
      <Pharmaceuticals/>
    </div>
  );
};

export default App;