import { React, createContext, useContext, useEffect, useState } from "react";
import PRODUCTS from "../products.js";

const shopContext = createContext();

export function ShopProvider({ children }) {
  const [cart, setCart] = useState(cartItems());

  function cartItems(){
    let cart = {}
    for(let i =1; i < PRODUCTS.length+1 ; i++){
        cart[i] = 0

    }
    return cart
  }

  function addToCart(productID) {
    setCart(prev => ({...prev, [productID]: prev[productID] +1 }));
  };

  function removeFromCart(productID){
    setCart(prev => ({...prev, [productID]: prev[productID] -1 }))
  };

  function updateCartItemCount(quantity,productID){
    setCart(prev => ({...prev, [productID]: quantity }))
    
  };

  function getTotalCartAmount(){
    let totalAMount = 0;
    for(let i in cart){
      console.log(i)
      if(cart[i] > 0){
        let itemData = PRODUCTS.find(product => product.id === Number(i))
        totalAMount += cart[i] * itemData.price
      }
     
    }
    return totalAMount
  }

  console.log(cart)

  const value = { addToCart, cart, removeFromCart, updateCartItemCount, getTotalCartAmount };
  return <shopContext.Provider value={value}>{children}</shopContext.Provider>;
}

//use shopContext hook
export function useShop() {
  return useContext(shopContext);
}
