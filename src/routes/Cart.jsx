import React from 'react'
import { useLocation } from 'react-router-dom'; 


function Cart() {

  const location = useLocation();
  const item = location.state?.itemAdicionado;

  if(!item){
    return (
        <>
          <h1>O carrinho está vazio</h1>
        </>
    )
  }
  
  return(
    <>
      <div>
        <hr />

        <h3>{item.name}</h3>
        <p>{item.ingredients}</p>
        <p>{item.price}</p>
      </div>
    </>
  )
}

export default Cart;
