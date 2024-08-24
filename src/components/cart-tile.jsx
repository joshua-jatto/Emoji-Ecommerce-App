import React from "react";

import { useShop } from "../context/shop-Context";

export default function carttTile({ data }) {
  const { addToCart, removeFromCart, cart, updateCartItemCount } = useShop();
  return (
    <div
      key={data.id}
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "250px",
        height: "auto",
        border: "1px solid brown",
        borderRadius: "4px",
        padding: "7px",
        hover: "cursor: pointer",
      }}
    >
      <div
        style={{
          fontFamily: "fantasy",
          fontWeight: "lighter",
          fontStyle: "italic",
          fontSize: "smaller",
        }}
      >
        {data.title}
      </div>
      <div style={{ fontSize: "7rem" }}>{data.expression}</div>
      <p style={{fontWeight:'800',fontFamily:'cursive', fontSize:'16px'}}>${data.price}</p>
      <p style={{ fontWeight: "600", fontFamily: "cursive", fontSize: "16px" }}>
        {/* {data.description} */}
        {'Qty'}
      </p>
        <div>
        <button style={{width:'20px', height:'20px', fontSize:'', fontWeight:'bolder'}} onClick={()=>removeFromCart(data.id)} >-</button>
      <input type="number" style={{width:'35px', fontSize:'1rem'}} value={cart[data.id]} onChange={e=> updateCartItemCount(Number(e.target.value), data.id)} />
      <button style={{width:'20px', height:'20px', fontSize:'', fontWeight:'bolder'}}  onClick={()=>addToCart(data.id)}>+</button>
        </div>

         <div style={{
        margin:'10px',
        height:'35px',
        border:'1px groove brown',
        background:'none',
        fontSize:'1rem',
        fontWeight:'100',
        margin:'10px, auto ',
        width:'100%',
        fontFamily:"fantasy",
        padding:'5px'
      }}
      >
        ${(cart[data.id] * data.price).toFixed(2)}
      </div>
    </div>
  );
}
