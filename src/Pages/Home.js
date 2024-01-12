import Products from "../Components/Products"
import Layout from "../Components/Layouts/HomePageLayout"

export default function Home(){
    return (
        <Layout>
        <div className="container">
            <Products />
        </div>  
        </Layout>
    )
}