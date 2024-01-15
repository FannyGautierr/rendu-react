import Layout from "../Components/Layouts/HomePageLayout";
import ProductCard from "../Components/ProductCard";
import ProductCardCart from "../Components/ProductCardCart";
import { useCart } from "../Providers/CartContext";
import { useEffect, useState } from "react";

export default function ShoppingCart(){

    let { cart, addToCart, deleteOneItem, deleteAll, changeNumberOfItem } = useCart()
    let [total,setTotal] = useState(0)

    useEffect(()=>{
        setTotal(
            cart.reduce((accumulator, currentValue)=>{
                return accumulator + (currentValue.product.price * currentValue.numberOfItem)
            }, 0)
        )
    },[cart])

    return(
     <Layout >
        <div>
            <p className="text-center text-2xl font-bold mt-10">My shopping Cart</p>
            <div className="flex w-full px-10 gap-20 mt-10">
            {
                cart.map((item)=>{
                    return (
                    <div className="gap-4 flex flex-col">
                            <ProductCardCart product={item} setData={changeNumberOfItem}/>
                            <button 
                                className="flex gap-2 justify-center items-center px-2 py-1 border border-zinc-200 hover:bg-zinc-200 transition-colors rounded-lg" 
                                onClick={()=>{deleteOneItem(item.id)}}
                            >
                                Delete
                            </button>
                        </div>
                      )      
                })
            }
            </div>
            <button 
            className="m-auto flex gap-2 bg-red-200 text-red-900 items-center px-2 py-1 border border-zinc-200 hover:bg-red-300 transition-colors rounded-lg mt-10" 
            onClick={()=>{deleteAll()}} >
                Delete the all cart
            </button>

            <p className="text-center text-2xl mt-10 font-bold">Total : {total} €</p>

        </div>
     </Layout>
    )
}
