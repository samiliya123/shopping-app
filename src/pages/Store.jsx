import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { productsArray } from '../productStore'
import ProductCart from '../components/ProductCart'

export default function Store() {
  return (
    <div>
        <h1 align='center' className='p-3'>Welcome to store!</h1>
        <Row xs={1} md={3} className='g-4'>
            {productsArray.map((product, id) => (  
            <Col align='center' key={id}>
                <ProductCart product={product}/>
            
            </Col>))}
           

        </Row>
    </div>
  )
}
