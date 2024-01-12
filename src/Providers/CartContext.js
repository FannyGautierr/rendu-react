import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export function CartProvider({children}){
    const [cart,setCart] = useState([])

    const addToCart = (item) => {
        setCart([...cart,item])
    }

    const deleteOneItem = (itemId) => {
        setCart(cart.filter((item)=> item.id !== itemId))
    }

    const deleteAll = () => setCart([])

    const changeNumberOfItem = (itemId, newQuantity) =>{

        let newCart = cart.map((item)=>{
            if(item.id === itemId){
                return { ...item , quantity: newQuantity}
            }else{
                return item;
            }
        })
        setCart(newCart);
    }

    return (
    <CartContext.Provider value={{cart, addToCart, deleteOneItem, deleteAll, changeNumberOfItem}}>
        {children}
    </CartContext.Provider>
    )
}
// ajouter le prix total du panier
export function useCart(){
    return useContext(CartContext);
}