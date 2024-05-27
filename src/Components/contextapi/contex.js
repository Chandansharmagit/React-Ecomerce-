import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  //setting the if selse statenet 

  



  const updateCartQuantity = (itemId, newQuantity) => {
    console.log("Cart Items:", cartItems); // Log the cart items array
    setCartItems(
      cartItems.map((item) => {
        console.log("Current Item:", item); // Log each item in the map function
        return item.id === itemId ? { ...item, quantity: newQuantity } : item;
      })
    );
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) => {
      if (!prevCartItems || !prevCartItems.length) return []; // If cartItems is null, undefined, or empty, return an empty array
      return prevCartItems.filter((item) => item && item.id !== itemId); // Check if item exists and has an id property
    });
  };
  
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateCartQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
