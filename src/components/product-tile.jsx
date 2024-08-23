import React from 'react'

import { useShop } from '../context/shop-Context'

export default function ProductTile({data}) {

  const {addToCart, cart} = useShop()


  return (
    <div key={data.id} style={{display:'flex', flexDirection:'column', maxWidth:'250px', height:'auto', border:'1px solid brown', borderRadius:'4px', padding:'7px', hover:'cursor: pointer'}} >
      <div style={{fontFamily:"fantasy", fontWeight:'lighter', fontStyle:'italic',fontSize:'smaller'}}>{data.title}</div>
      <div style={{fontSize:'7rem'}}>{data.expression}</div>
      <p style={{fontWeight:'500',fontFamily:'cursive', fontSize:'16px'}}>{data.description}</p>
      <p style={{fontWeight:'800',fontFamily:'cursive', fontSize:'16px'}}>${data.price}</p>
      <p style={{fontWeight:'800',fontFamily:'cursive', fontSize:'16px'}}>#📍:{(data.tags).join(' ')}</p>
      <button style={{
        margin:'10px',
        height:'35px',
        border:'1px groove brown',
        background:'none',
        fontSize:'1rem',
        fontWeight:'100',
        margin:'10px, auto ',
        width:'100%',
        margin:'7px 0',
        fontFamily:"fantasy"
      }}
      onClick={()=>addToCart(data.id)}
      >Add to cart🛒{cart[data.id] > 0 && (cart[data.id])} </button>
    </div>
  )
}
