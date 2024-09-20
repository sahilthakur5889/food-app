import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext=createContext(null)
const StoreContextProvider=(props)=>{

    const[cardItems,setCartItems]=useState({});
      const addToCart=(itemId)=>{
        if(!cardItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
      }

     const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
     }
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cardItems){
            if(cardItems[item]>0){
                let itemInfo=food_list.find((product)=>product._id===item)
                totalAmount +=itemInfo.price*cardItems[item];
            }
        }
        return totalAmount;
    }
    const contextValue={
       food_list,
       cardItems,
       setCartItems,
       addToCart,
       removeFromCart,
       getTotalCartAmount,
    }
    return(
        <StoreContext.Provider value={contextValue}>
        {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider



// StoreContext is created using createContext(null), and this context will hold a shared state or functionality that can be accessed by components wrapped in the provider.

// StoreContextProvider:
// A functional component that will act as a context provider, wrapping any child components (props.children) inside the StoreContext.Provider.

// contextValue:
// This object is where you would add any state, functions, or values that you want to share across components.

// StoreContext.Provider:
// It is the provider that passes the contextValue to its children. Any component inside StoreContextProvider will be able to access contextValue using the useContext(StoreContext) hook.