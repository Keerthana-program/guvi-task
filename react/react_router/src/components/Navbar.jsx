import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Store/CartContext";

const Navbar = ({ onSearch }) => {
  const { cart } = useContext(CartContext);

  // Calculate total items in the cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  // Handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Pass the search term to the parent component
  };

  return (
    <nav className="bg-gradient-to-tr from-gray-800 to green-100 p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold ml-2 bg-black text-yellow-200 px-2 py-1 rounded-full hover:underline">
          FakeStore
        </Link>
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
            className="p-2 rounded border border-gray-300 text-black"
          />
          <Link to="/cart" className="hover:underline flex items-center ml-2 bg-black text-yellow-200 px-2 py-1 rounded-full text-lg font-bold ">
            Cart
            <span className="ml-2 bg-black text-yellow-200 px-2 py-1 rounded-full">
              {totalItems}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
