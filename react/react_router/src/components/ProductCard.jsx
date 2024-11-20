import React from "react";

const ProductCard = ({ product, cart, addToCart }) => {
  const isInCart = cart.find((item) => item.id === product.id);

  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p>${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className={`w-full mt-2 px-4 py-2 rounded-full hover:bg-black ${
          isInCart ? "bg-red-500" : "bg-yellow-500"
        } text-white`}
      >
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
