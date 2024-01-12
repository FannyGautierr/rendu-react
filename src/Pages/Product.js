import { useParams } from "react-router-dom"
import Layout from "../Components/Layouts/HomePageLayout"
import { useGetProductsQuery } from "../Services/API"
import { IoBagHandle } from "react-icons/io5"

export default function Products(){
    let {id} = useParams()
    const { data: allProducts, isLoading, isError } = useGetProductsQuery();
    const specificProduct = allProducts?.find(product => product.id === id);
    if (isLoading) {
        return <Layout><p>Loading...</p></Layout>;
    }

    if (isError || !specificProduct) {
        return <Layout><p>Product not found or error loading products.</p></Layout>;
    }

    return (
        <Layout>
            <div>
                <h1>{specificProduct.title}</h1>
                <img src={specificProduct.image} alt={specificProduct.title} className="h-28 w-28 object-cover"/>
                <p>{specificProduct.price} €</p>
                <p>{specificProduct.quantity}</p>
                <p>{specificProduct.price_per_measure}</p>
                <button className="flex gap-2 items-center px-2 py-1 border border-zinc-200 hover:bg-zinc-200 transition-colors rounded-lg">
                    <IoBagHandle />
                    Add to cart 
                </button>
            </div>
        </Layout>
    );
}