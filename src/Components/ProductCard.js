import { IoBagHandle } from "react-icons/io5"
import { Link } from "react-router-dom"
import { Path } from "react-router-dom"

export default function ProductCard(props){
    const url = window.location.href;
    console.log(url)
    return(
        <Link to={`/product/${props.product.id}`} className="shadow p-4 flex flex-col items-start justify-between gap-2 hover:shadow-lg transition-shadow ">
            <img src={props.product.image} alt={props.product.title} className="h-40 m-auto"/>
            <div className="h-px bg-zinc-200 w-1/2 m-auto"/>
            <p className="font-bold">{props.product.title}</p>
            <p> {props.product.price} €</p>
            <p>quantité restante : {props.product.quantity} </p>
            {
                !props.product.price_per_measure ? null :
           
            <p className="font-thin text-zinc-500">{Math.round(props.product.price_per_measure)}€ / {props.product.unit_of_measurement}</p>
            }
            {/* {
                url !== 'http://localhost:3001/shoping-cart' ? 
           
            <button className=" flex gap-2  items-center px-2 py-1 border border-zinc-200 hover:bg-zinc-200 transition-colors rounded-lg" onClick={() => props.addToCart(props.product)} >
            <IoBagHandle/>
                Add to cart 
            </button>
            : null
             }  */}
        </Link>
    )
}