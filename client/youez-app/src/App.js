import "./App.css";
import { Banner } from "./components/banner/Banner";
import { Categories } from "./components/categories/Categories";
import { Main } from "./components/main/Main";
import { NavBar } from "./components/navbar/Navbar.jsx";
import { PopularProducts } from "./components/popular_products/PopularProducts";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Categories/>
      <Banner/>
      <Main/>
      <PopularProducts/>
    </div>
  );
}

export default App;
