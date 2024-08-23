import React from "react";
import { useShop } from "../context/shop-Context";
import CartTile from "../components/cart-tile";
import PRODUCTS from '../products'
import { useNavigate } from "react-router";

export default function Cart() {

  const { cart, getTotalCartAmount } = useShop()
  let totalAMount = getTotalCartAmount().toFixed(2)
  const navigate = useNavigate()

  return (
    <div
      style={{
        fontSize: "1.5em",
        padding: "1rem",
        fontWeight: "600",
        margin: " .5rem auto",
        width: "100vw",
        textAlign: "center"
      }}
    >
      <h3 style={{ margin: '1em auto', fontFamily: 'cursive', color: 'brown' }}>items in Cart:🛒</h3>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '.5rem', flexWrap: 'wrap', alignItems: 'center', justifyContent:'center', gap:'10px' }}
      >
        {PRODUCTS.map(product => {
          if(cart[product.id] !== 0 ){
          return <CartTile data={product} key={product.id} />
          }
        })}
      </div>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:'3rem'}}>
      <div style={{
        height:'35px',
        border:'1px groove brown',
        background:'none',
        fontSize:'1rem',
        fontWeight:'100',
        margin:'10px, auto ',
        width:'50%',
        margin:'7px 0',
        fontFamily:"cursive",
        padding:'5px'
      }}>
        {totalAMount === 0 ? 
        <h3>Cart is empty 👀</h3> 
        :<h3>Total: ${totalAMount} </h3>
        }
        </div>


        <button style={{
        height:'35px',
        border:'1px groove brown',
        background:'none',
        fontSize:'1rem',
        fontWeight:'100',
        margin:'10px, auto ',
        width:'50%',
        margin:'7px 0',
        fontFamily:"fantasy",
        padding:'5px'
      }}
      onClick={()=>navigate('/')}
      >
        <h3>Back to store 🛒 </h3>
        </button>
      </div>
     
    </div>
  );
}
