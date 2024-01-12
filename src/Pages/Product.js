import { useParams } from "react-router-dom"
import Layout from "../Components/Layouts/HomePageLayout"
import { useGetCommentsQuery, useGetProductsQuery, useCreateCommentMutation } from "../Services/API"
import { IoBagHandle } from "react-icons/io5"
import { LuLoader } from "react-icons/lu";
import { useState } from "react";
import { useCart } from "../Providers/CartContext";

export default function Products(){
    let {id} = useParams()
    let { cart, addToCart } = useCart()
    console.log(cart)
    const { data: allProducts, isLoading, isError } = useGetProductsQuery();

    const { data: comments, isLoading: isLoadingComment} = useGetCommentsQuery(id);

    const [createComment] = useCreateCommentMutation()

    const [commentData, setCommentData] = useState({ comment: '', username: '' });

    const handleSubmit = (event) => {
        event.preventDefault();
        createComment({data:commentData, id});
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name,value)
        setCommentData(prev => ({ ...prev, [name]: value }));
    };
   
    let [numberOfItem, setNumberOfItem] = useState(0)

    const specificProduct = allProducts?.find(product => product.id === id);
    if (isLoading || isLoadingComment) {
        return <Layout><LuLoader className="animate-spin text-center mt-20"/></Layout>;
    }

    if (isError || !specificProduct) {
        return <Layout><p>Product not found or error loading products.</p></Layout>;
    }

    return (
        <Layout>
            <div className="mt-20 m-auto w-full px-12 p-10 flex items-start justify-between ">
                <img src={specificProduct.image} alt={specificProduct.title} className="h-64 w-64 object-cover "/>
                <div className="w-1/2">
                    <h1 className="text-2xl ">{specificProduct.title}</h1>
                    <p>{specificProduct.price} €</p>
                    <p>{specificProduct.quantity}</p>
                    <p>{specificProduct.price_per_measure}</p>

                    <div className="flex items-center gap-2">
                    <div class="relative flex items-center max-w-[8rem]">
                        <button 
                            type="button" 
                            id="decrement-button" 
                            onClick={()=>{setNumberOfItem(numberOfItem - 1)}} 
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
                            value={numberOfItem} 
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
                    <button 
                    onClick={()=>{addToCart({id:specificProduct.id, numberOfItem})}}
                    className="flex gap-2 items-center px-2 py-1 border border-zinc-200 hover:bg-zinc-200 transition-colors rounded-lg">
                        <IoBagHandle />
                        Add to cart
                    </button>
                    </div>
                </div>
            </div>
            <h1 className="text-2xl font-bold text-center">Comments</h1>
            <div className="border border-zinc-200 m-auto w-fit p-4 rounded ">
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <label>
                        <p>Comment</p>
                        <input 
                            type="text" 
                            name="comment"
                            className="border border-zinc-300 rounded"
                            value={commentData.comment}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        <p>Username</p>
                        <input 
                            type="text" 
                            name="username"
                            className="border border-zinc-300 rounded"
                            value={commentData.username}
                            onChange={handleInputChange}
                        />
                    </label>
                     <button type="submit" className="rounded border border-zinc-300">Add comment</button>
                </form>
            </div>
         
            {
                comments.length > 0 ? 
           <div>
                <div>
                    
                    <div className="flex flex-col w-full px-10 gap-5 mb-10">
                    {comments.map((comment,index)=>{
                    return (
                        <div className="w-full shadow rounded p-4 flex flex-col gap-3 items-start">
                            <div className="flex items-center gap-2">
                                <img src={`https://robohash.org/${index}`} alt="profile" className="rounded-full h-10 w-10"/>
                                <p className="font-thin italic">{comment.username}</p>
                            </div>
                            <p>{comment.comment}</p>
                        </div>
                    )
                    })}
                    </div>
                </div>
              
            </div> : null }
           
        </Layout>
    );
}