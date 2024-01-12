import Layout from "../Components/Layouts/HomePageLayout";
import { useCart } from "../Providers/CartContext";

export default function ShoppingCart(){

    let { cart, addToCart,  } = useCart()
console.log(cart)

    return(
     <Layout >
        <div>
            <p>My shopping Cart</p>
            <div>
            {
                cart.map((item)=>{
                    return (
                        <div className="shadow gap-4 flex flex-col">
                            <h1>{item.id}</h1>
                            <h1>{item.numberOfItem}</h1>

                            <button onClick={}>Delete</button>
                        </div>
                      )      
                })
            }
            </div>
        </div>
     </Layout>
    )
}
