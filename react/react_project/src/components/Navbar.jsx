import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Navbar = ({ onCartClick }) => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="bg-purple-500 text-black p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold ">Fake Store</h1>
      <button
        className="relative bg-yellow-200 text-black-500 px-4 py-2 rounded"
        onClick={onCartClick}
      >
        Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
      </button>
    </nav>
  );
};

export default Navbar;
