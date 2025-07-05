import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products'
export const ShopContext = createContext(null)

//this function creates an empty item count hashmap like a cart 
const getdefCart=()=>{
    let cart={}; //we will be storing the count of each item id using a dictionary like a hashmap in python
    for (let i=0; i< PRODUCTS.length +1 ; i++){
        cart[i]=0
    }
    return cart;
}

function ShopContextProvider(props) {
    const [cartItems, setCartItems] = useState(getdefCart())

    //function to add item by getting the cart and then increasing the count according to the id passed
    const addItem=(itemID)=>{
        setCartItems((prev)=> ({...prev, [itemID]: prev[itemID]+1 }))
    }
    //do similar to remove from the cart
    const removeItem=(itemID)=>{
        setCartItems((prev)=> ({...prev, [itemID]: prev[itemID]-1 }))
    }

    //to change the item counts manually from cart
    const updateItemCount=(newCount, itemID)=>{
        setCartItems((prev)=> ({...prev, [itemID]: newCount }))
    }

    //function for the checkout button 
    const checkoutFunc=()=>{
        setCartItems(getdefCart())
        alert('Thank you for Shopping with us !!')
    }

    //function to get total cart amount
    const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
    };

    //this can be passed as the context values 
    const contextValues={
        cartItems,
        addItem,
        removeItem,
        updateItemCount,
        checkoutFunc,
        getTotalCartAmount,
    }

  return (
    <ShopContext.Provider value={contextValues}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;