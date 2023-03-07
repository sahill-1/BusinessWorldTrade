import './App.css';
import AgricultureProducts from './Components/AgricultureProducts';
import TopSuppliers from './Components/TopSuppliers';
// import FeaturedProducts from './Components/FeaturedProducts';
// import TopSupplies from './Components/TopSupplies';
function App() {
  return (
    <div className="App">
      {/* <FeaturedProducts/> */}
      <TopSuppliers/>
      <AgricultureProducts/>
    </div>
  );
}

export default App;
