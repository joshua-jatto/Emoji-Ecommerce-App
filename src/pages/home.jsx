import React, { useState } from "react";
import PRODUCTS from "../products.js";
import ProductTile from "../components/product-tile.jsx";

export default function Home() {

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',  // Adjust the gap between the cards
    padding: '20px',
    margin: " .5rem auto"
};

  return (
    <div
      style={{
        fontSize: "1.5em",
        padding: "1rem",
        fontWeight: "600",
        margin: " .5rem auto",
        width: "100vw",
        textAlign: "center",
      }}
    >
      <h3 style={{ margin: '1em auto', fontFamily: 'cursive', color: 'brown', }}> Let's go M🌝🌚d shopping <br/>🤸‍♀️🤸🏽‍♀🤸🏽‍♀</h3>
      <div style={gridContainerStyle}
      >
        {PRODUCTS.map(product => {
          return <ProductTile data={...product} key={product.id} />
        })}
      </div>️
    </div>
  );
}
