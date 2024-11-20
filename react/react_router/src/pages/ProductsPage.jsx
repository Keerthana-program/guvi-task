import React, { useState, useEffect, useContext } from "react";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../store/CartContext";
import Navbar from "../components/Navbar";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { cart, addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Initially show all products
      });
  }, []);

  const handleSearch = (searchTerm) => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(lowerCaseTerm)
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="container mx-auto p-4 ">
        <h1 className="text-2xl font-bold mb-4 text-yellow-200">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-gradient-to-tr from-gray-800 to green-100">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cart={cart}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
