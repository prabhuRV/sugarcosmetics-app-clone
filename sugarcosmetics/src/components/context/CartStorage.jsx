import React,{createContext,useState,useRef, useEffect} from 'react';

const CartContext = createContext();
const CartProvider = ({children}) =>{
  
    const [cart1,setCart1] =  useState([]);
   
   
    
    return <CartContext.Provider value={{cart1,setCart1}}>{children}</CartContext.Provider>
}

export {CartContext,CartProvider} 