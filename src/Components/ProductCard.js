import { IoBagHandle } from "react-icons/io5"
import { Link } from "react-router-dom"

export default function ProductCard(props){

    return(
        <Link to={`/product/${props.product.id}`} className="shadow p-4 flex flex-col items-start justify-between ">
            <img src={props.product.image} alt={props.product.title} className="h-28 w-28 object-cover"/>
            <p>{props.product.title}</p>
            <p> {props.product.price} €</p>
            <p>{props.product.quantity}</p>
            <p>{props.product.price_per_measure}</p>
            <button className=" flex gap-2  items-center px-2 py-1 border border-zinc-200 hover:bg-zinc-200 transition-colors rounded-lg" onClick={() => props.addToCart(props.product)} >
            <IoBagHandle/>
                Add to cart 
            </button>
        </Link>
    )
}