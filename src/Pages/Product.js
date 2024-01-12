import { useParams } from "react-router-dom"

export default function Products(){
    let {id} = useParams()
    return(
        <h1>
{id}
        </h1>
    )
}