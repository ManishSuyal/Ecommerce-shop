import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product";
//created context and initalized with null
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextValue = {all_product};
    //stored the value we want to acess using context
    return (
        //using context we can use the data in different components
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
 
export default ShopContextProvider;

