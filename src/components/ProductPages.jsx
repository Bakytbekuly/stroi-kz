import React from 'react'
import { useParams } from 'react-router-dom'
import { fetchStroiId } from "../fetchers/fetchStroi"
import GridElement from "./GridElement"
import NotFoundPage from './NotFoundPage'

const ProductPages = () => {
    const { id } = useParams()
    // console.log(useParams());
    const [product, setProduct] = React.useState([])


    React.useEffect(() => {
        fetchStroiId({ id }).then(res => {
            // console.log(res);
            setProduct(res)
        })
    }, [id])
    console.log(product.content);

    return (
        <div style={{ marginLeft: "700px" }}>{
            product.content == false ? <NotFoundPage message={"No Product"} /> :

                <GridElement product={product} />
        }</div>
    )
}

export default ProductPages