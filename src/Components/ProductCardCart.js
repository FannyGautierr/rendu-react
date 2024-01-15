import { Link } from "react-router-dom"


export default function ProductCardCart(props){
    return(
        <Link className="shadow p-4 flex flex-col items-start justify-between gap-2 hover:shadow-lg transition-shadow min-h-100">
            <img src={props.product.product.image} alt={props.product.product.title} className="h-40 m-auto"/>
            <div className="h-px bg-zinc-200 w-1/2 m-auto"/>
            <p className="font-bold">{props.product.product.title}</p>
            <p> {props.product.product.price} €</p>
            <p>Quantité restante : {props.product.product.quantity} </p>
            {
                !props.product.product.price_per_measure ? null :
           
            <p className="font-thin text-zinc-500">{Math.round(props.product.product.price_per_measure)}€ / {props.product.product.unit_of_measurement}</p>
            }
       
            <div className="flex items-center gap-2">
                <div class="relative flex items-center max-w-[8rem]">
                    <button 
                        type="button" 
                        id="decrement-button" 
                        onClick={()=>{
                            if(props.product.numberOfItem - 1 <= 0) return
                            props.setData(props.product.numberOfItem -= 1)
                        }}
                        class="bg-gray-100  hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    >
                        <svg class="w-3 h-3 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input 
                        type="number" 
                        id="quantity-input" 
                        class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-[80px] py-2.5 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                        placeholder="999" 
                        min='0'
                        max='2'
                        value={props.product.numberOfItem} 
                        required
                    />
                    <button
                        type="button" 
                        id="increment-button" 
                        onClick={()=>{
                            if(props.product.numberOfItem - 1 < 0) return
                            props.setData(props.product.numberOfItem += 1)
                        }}
                        class="bg-gray-100  hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    >
                        <svg class="w-3 h-3 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
            </div>
        </Link>
    )
}