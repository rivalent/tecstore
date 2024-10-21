import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import { useEffect, useState } from "react";
import ExclusiveSection from "./components/ExclusiveSection";
import TestimonialsList from "./components/TestimonialsList";
import Footer from "./components/Footer";



function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
  }, []); 

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Header />
          <div className="page-inner-content">
            <div className="section-tittle">
              <h3>Produtos Mais Vendidos</h3>
              <div className="underline"></div>
            </div>

            <div className="main-content">
              <ProductsList products={products} />
            </div>
          </div>
        </main>
        <ExclusiveSection />
        <TestimonialsList />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
