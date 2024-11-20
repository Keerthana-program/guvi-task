import React from "react";

const CartItem = ({ item, updateCart, removeFromCart }) => {
  return (
    <div className="flex items-center justify-between border p-4 rounded shadow">
      <div className="flex items-center">
        <img src={item.image} alt={item.title} className="h-16 w-16 mr-4" />
        <div>
          <h2 className="font-semibold">{item.title}</h2>
          <p>${item.price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="bg-gray-300 px-2"
          onClick={() => updateCart(item.id, item.quantity - 1)}
        >
          -
        </button>
        <span className="mx-2">{item.quantity}</span>
        <button
          className="bg-gray-300 px-2"
          onClick={() => updateCart(item.id, item.quantity + 1)}
        >
          +
        </button>
        <button
          className="bg-red-500 text-white ml-4 px-4 py-2 rounded-full hover:bg-black"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
