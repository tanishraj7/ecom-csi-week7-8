import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';


function Product(props) {
    const {id, productName, price, productImage}= props.data;
    const {cartItems, addItem} = useContext(ShopContext);

    const totalCount = cartItems[id];
  return (
    <div className='card'>
        <img src={productImage} alt={id}/>
        <p><b>{productName}</b></p>
        <p>${price}</p>
        <button onClick={()=> addItem(id)}>Add to Cart {cartItems[id] > 0 && <><br/><b>In cart: [{cartItems[id]}]</b></>}</button>
    </div>
  )
}

export default Product