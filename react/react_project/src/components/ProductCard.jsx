import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border p-4 rounded shadow-md">
      <img src={product.image} alt={product.title} className="h-48 mx-auto" />
      <h3 className="text-lg font-bold mt-2">{product.title}</h3>
      <p className="text-blue-500 font-semibold">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-yellow-200 text-black px-4 py-2 rounded mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
