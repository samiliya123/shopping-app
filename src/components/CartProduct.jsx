 import React from 'react'
 import { useContext } from 'react'
 import { CartContext } from '../cartContext'
 import { getProductData } from '../productStore'
import { Button } from 'react-bootstrap';
  
 
 function CartProduct(props) {
    const cart = useContext(CartContext);
    const quantity = props.quantity;
    const id = props.id;
    const product = getProductData(id);


   return (
      <>
      <h1>{product.title}</h1>
      <p>{quantity} Total</p>
      <p>{(quantity * product.price).toFixed(2)}</p>
      <Button size='sm' onClick={() => cart.deleteFromCart(id)}>Remove</Button>
      <hr />
 

      </>
   )
 }
 
 
 
 export default CartProduct
 

