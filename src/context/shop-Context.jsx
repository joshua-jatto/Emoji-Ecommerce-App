import { React, createContext, useContext, useEffect, useState } from "react";
import PRODUCTS from "../products.js";

const shopContext = createContext();

export function ShopProvider({ children }) {
  const [cart, setCart] = useState(cartItems());

  //initialize each object in PRODUCTS[] with an iniatial value of one.
  function cartItems(){
    let cart = {}
    for(let i =1; i < PRODUCTS.length+1 ; i++){
        cart[i] = 0

    }
    return cart
  }

  //add +1 to the value of an object an its index
  function addToCart(productID) {
    setCart(prev => ({...prev, [productID]: prev[productID] +1 }));
  };


  //Subtract -1 from the value of an object an its index
  function removeFromCart(productID){
    setCart(prev => ({...prev, [productID]: prev[productID] -1 }))
  };

  //update value of an object an its index with an input value 
  function updateCartItemCount(quantity,productID){
    setCart(prev => ({...prev, [productID]: quantity }))
    
  };

  //get total amount of items in cart
  function getTotalCartAmount(){
    let totalAMount = 0; // initial count
    // loop for iterating through the array
    for(let i in cart){

      if(cart[i] > 0){ //if cart at i > 0 i.e [i] in cart
        let itemData = PRODUCTS.find(product => product.id === Number(i))
        totalAMount += cart[i] * itemData.price
      }
     
    }
    return totalAMount
  }


  const value = { addToCart, cart, removeFromCart, updateCartItemCount, getTotalCartAmount };
  return <shopContext.Provider value={value}>{children}</shopContext.Provider>;
}

//use shopContext hook
export function useShop() {
  return useContext(shopContext);
}
