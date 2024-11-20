import React, { useContext } from "react";
import { CartContext } from "../store/CartContext";
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";

const CartPage = () => {
  const { cart, updateCart, removeFromCart } = useContext(CartContext);

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const totalPrice = calculateTotal();
  const discountedPrice = totalPrice * 0.9;

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-yellow-200 text-center">Cart</h1>
        <div className="space-y-4 bg-gradient-to-tr from-gray-800 to green-100">
          {cart.length > 0 ? (
            cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateCart={updateCart}
                removeFromCart={removeFromCart}
              />
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <h2 className="mt-4 text-lg bg-black text-yellow-200 px-2 py-2 rounded-full text-center">
            Total Price: ${totalPrice},<br></br>
        Discounted Price: ${discountedPrice.toFixed(2)} (10% discount applied)
        </h2>
      </div>
    </>
  );
};

export default CartPage;
