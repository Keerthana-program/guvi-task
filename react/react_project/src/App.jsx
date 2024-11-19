import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onCartClick={() => setIsModalOpen(true)} />
      <ProductList />
      <CartModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;
