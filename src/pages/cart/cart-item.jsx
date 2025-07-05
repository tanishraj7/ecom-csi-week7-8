import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

function CartItem(props) {
  const {id, productName, price, productImage}= props.data;
  const {cartItems, addItem, removeItem, updateItemCount} = useContext(ShopContext);

  const changeHandler=(e, itemID)=>{
    const newCount = Number(e.target.value)
    updateItemCount(newCount, itemID);
  }

  return (
    <div className="c-item">
      <img src={productImage} alt={productName}/>
      <div>
        <h3>{productName}</h3>
        <p>${price}</p>
      </div>
      <button onClick={()=> removeItem(id)}>-</button>
      <input type='text' value={cartItems[id]} onChange={(event)=> changeHandler(event, id)}/>
      <button onClick={()=> addItem(id)}>+</button>
    </div>
  )
}

export default CartItem