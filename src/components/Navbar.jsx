 
import React, { useContext } from 'react'
import { useState } from 'react'
import { Button, Navbar, Container, Modal} from 'react-bootstrap'
import { CartContext } from '../cartContext';
import CartProduct from './CartProduct';


export default function NavbarComponent() {
  const cartCount = useContext(CartContext);

  const cartCountProducts = cartCount.items.reduce((sum, product) => sum + product.quantity, 0)

  const  [show, setShow] = useState(false);
  const closeShow = () => setShow(false);
  const handleShow = () => setShow(true);
    
  return (
    <>
     <Navbar expand='sm'>
        <Navbar.Brand href="/"></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Button onClick={handleShow}>Cart: ({cartCountProducts} Items)</Button>
            </Navbar.Collapse>
            <Modal  show={show} onHide={closeShow}>
              <Modal.Header closeButton>
                <Modal.Title >Shopping Cart</Modal.Title>
              </Modal.Header>
              <Modal.Body>
               {
                cartCountProducts > 0 ?
                <>
                   <p>Cart Item: </p>
                   {cartCount.items.map((currentProduct, index) => (
                     <CartProduct key={index} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                   ))}
                   <h1>Total: {cartCount.getTotalCost().toFixed(2)}</h1>
                    <Button variant='success'>Purchase Items</Button>
                </>
                :
                <p>No Cart Items</p>
               }
              </Modal.Body>
 
            </Modal>
        </Navbar>
    </>    
  ) 
}
