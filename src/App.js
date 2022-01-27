import "./App.css";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import Tiles from "./components/tiles/Tiles";

function App() {
  return (
    <div className="App">
      <Hero />
      <Products />
      <Tiles />
    </div>
  );
}

export default App;
