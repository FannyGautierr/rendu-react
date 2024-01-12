import Products from "../Components/Products"
import Layout from "../Components/Layouts/HomePageLayout"
import { useCart } from "../Providers/CartContext"
import { useEffect } from "react"

export default function Home(){

    let { cart, addToCart } = useCart()
    // console.log(cart)
    // useEffect(()=>{
    //     addToCart({name:'hey'})
    // },[])

    return (
        <Layout>
        <div className="w-full">
            <h1 className="text-center font-semibold p-10 text-2xl">Our latest products</h1>
            <Products />
        </div>  
        </Layout>
    )
}