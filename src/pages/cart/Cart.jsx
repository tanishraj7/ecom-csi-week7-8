import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import CartItem from './cart-item';
import './cart.css';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const {cartItems, checkoutFunc, getTotalCartAmount} = useContext(ShopContext);
  const cartTotal = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <h1>Your cart checkout now? </h1>
      <div className="cat-items">
        {PRODUCTS.map((product)=>{
          if (cartItems[product.id] !== 0){
            return <CartItem data={product}/>
          }
        })}
      </div>
      {cartTotal == 0 && <p className='empty-mssg'>Your cart is Empty</p>}
      <div className="footer">
        <h2>Subtotal: ${cartTotal} </h2>
        <button onClick={()=> checkoutFunc()}>checkout</button>
        <br/>
        <button onClick={()=> navigate('/')}>Continue Shopping</button>
      </div>
    </div>
  )
}

export default Cart