import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { fetchStroiId } from "../fetchers/fetchStroi"
import GridElement from "./GridElement"

const ProductPages = () => {
    const { id } = useParams()
    // console.log(useParams());
    const [product, setProduct] = React.useState([])
    const fullData = useSelector((state) => state.stroi.products);

    React.useEffect(() => {
        fetchStroiId({ id }).then(res => {
            // console.log(res);
            setProduct(res)
        })
    }, [id])


    return (
        <div style={{ margin: "auto" }}>

            <GridElement product={product} />
        </div>
    )
}

export default ProductPages