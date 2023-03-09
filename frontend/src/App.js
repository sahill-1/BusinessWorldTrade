import './App.css';
import AgricultureProducts from './Components/AgricultureProducts';
import TopSuppliers from './Components/TopSuppliers';
import FeaturedProducts from './Components/FeaturedProducts';
import FoodBeverage from './Components/FoodBeverage';
import ApparelsFashions from './ApparelsFashions';

function App() {
  return (
    <div className="App">
      <FeaturedProducts/>
      <TopSuppliers/>
      <AgricultureProducts/>
      <FoodBeverage/>
      <ApparelsFashions/>
    </div>
  );
};

export default App;