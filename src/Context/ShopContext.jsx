import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
//created context and initalized with null
export const ShopContext = createContext(null);


const getDefaultCart = ()=>{
    let cart = {}; 
    for (let index = 0; index < all_product.length+1; index++) {
      cart[index] = 0;         
      //the key will represent the product id and value will represnet the no of items added for product id
    }
    return cart;
}
const ShopContextProvider = (props) => {
    const [cartItems ,setCartItems ] = useState(getDefaultCart());
    //passing cartitems through context values
    //add to cart function
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }
    //using context we can acess cart items data in any component 
    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];

            }
        }
        return totalAmount;

    }
    const getTotalCartItems = () =>{
        let totalItem =  0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem+= cartItems[item];
            }
        }
        return totalItem;
    }
    const contextValue = {getTotalCartItems, getTotalCartAmount, all_product, cartItems , addToCart , removeFromCart};

    //stored the value we want to acess using context
    return (
        //using context we can use the data in different components
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
 
export default ShopContextProvider;

