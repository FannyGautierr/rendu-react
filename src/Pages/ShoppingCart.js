import Layout from "../Components/Layouts/HomePageLayout";
import ProductCard from "../Components/ProductCard";
import { useCart } from "../Providers/CartContext";
import { useEffect, useState } from "react";

export default function ShoppingCart(){

    let { cart, addToCart, deleteOneItem, deleteAll, changeNumberOfItem } = useCart()
    let [numberOfItem, setNumberOfItem] = useState(0)
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
            <p className="text-center text-2xl font-bold">My shopping Cart</p>
            <div className="flex flex-col w-full px-10">
            {
                cart.map((item)=>{
                    return (
                        <div className="shadow gap-4 flex flex-col">
                            <ProductCard product={item.product}/>
                            <div className="flex items-center gap-2">
                    <div class="relative flex items-center max-w-[8rem]">
                        <button 
                            type="button" 
                            id="decrement-button" 
                            onClick={item.numberOfItem-1} 
                            class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                        >
                            <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input 
                            type="text" 
                            id="quantity-input" 
                            data-input-counter aria-describedby="helper-text-explanation" 
                            class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="999" 
                            min={0}
                            max={999}
                            value={item.numberOfItem} 
                            required
                            />
                        <button
                         type="button" 
                         id="increment-button" 
                         onClick={()=>{setNumberOfItem(numberOfItem + 1)}}
                         class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                         >
                            <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                    </div>
                            <button 
                                className=" flex gap-2  items-center px-2 py-1 border border-zinc-200 hover:bg-zinc-200 transition-colors rounded-lg" 
                                onClick={()=>{deleteOneItem(item.id)}}
                            >
                                Delete
                                </button>
                        </div>
                      )      
                })
            }
            <button onClick={()=>{deleteAll()}} >Delete the cart</button>
            </div>

            <p>Total : {total} €</p>

        </div>
     </Layout>
    )
}
