import { useGetProductsQuery } from "../Services/API"
import ProductCard from "./ProductCard"

export default function Products(){


    let {data: products , isLoading, error} = useGetProductsQuery()

    if (error) return <p>Error</p>
    if (isLoading) return <p>Loading...</p>
    console.log(products)

    return(
        <div className="grid grid-cols-3 w-full px-10 gap-5 m-auto items-stretch place-items-stretch">
            {products.map((product)=>{
                return <ProductCard key={product.id} product={product}/>
            })}
    
        </div>
    )
}