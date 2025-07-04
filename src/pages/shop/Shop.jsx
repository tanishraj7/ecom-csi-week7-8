import React from 'react'
import {PRODUCTS} from '../../products'
import Product from './Product'
import './shop.css'

function Shop() {
  return (
    <div className='shop-body'>
        <h1>Shop now !!</h1>
        <div className='shop-items'>
            {PRODUCTS.map((product)=>(
                <Product data={product}/>
            ))}
        </div>
    </div>
  )
}

export default Shop