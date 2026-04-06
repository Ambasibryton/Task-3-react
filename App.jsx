import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>E-Commerce React Challenge</h1>
      <div className="app">
        <Navbar cartCount={cart.length} />
        <div className="layout">
          <Sidebar />
          <main className="products">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}

