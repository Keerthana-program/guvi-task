import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartModal = ({ isOpen, onRequestClose }) => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white shadow-lg transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 w-80`}
    >
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 bg-purple-500">Cart</h2>
        <button
          onClick={onRequestClose}
          className="text-red-500 text-sm absolute top-4 right-4 bg-white"
        >
          Close
        </button>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="grid grid-cols-1 border rounded shadow-md" >
            {cart.map((item) => (
              <li key={item.id} className="flex items-center mb-4">
                <img src={item.image} alt={item.title} className="h-16 w-16 rounded mr-4" />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-blue-500 font-semibold">${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-gray-200 px-2 py-1 rounded-l"
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-gray-200 px-2 py-1 rounded-r"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded ml-4"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartModal;
