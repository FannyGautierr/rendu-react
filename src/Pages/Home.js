import Products from "../Components/Products"
import Layout from "../Components/Layouts/HomePageLayout"

export default function Home(){
    return (
        <Layout>
        <div className="container">
            <h1 className="text-center font-semibold p-10 text-2xl">Our latest products</h1>
            <Products />
        </div>  
        </Layout>
    )
}