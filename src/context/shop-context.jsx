import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products'
export const ShopContext = createContext(null)

//this function creates an empty item count hashmap like a cart 
const getdefCart=()=>{
    let cart={}; //we will be storing the count of each item id using a dictionary like a hashmap in python
    for (let i=0; i< PRODUCTS.length; i++){
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

    //this can be passed as the context values 
    const contextValues={
        cartItems,
        addItem,
        removeItem,
    }

  return (
    <ShopContext.Provider value={contextValues}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;