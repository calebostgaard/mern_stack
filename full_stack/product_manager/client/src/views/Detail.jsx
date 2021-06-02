import React, { useEffect, useState } from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';
export default props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/product/" + props.id)
            .then(res => setProduct(res.data))
    }, []);

    const deleteProduct = () => {
        axios.delete('http://localhost:8000/product/' + props.id)
            .then(res => {
                console.log(res);
                navigate(`/products/`)
            })
    };
    
    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/product/" + product._id + "/edit"}>Edit</Link>
            <br/>
            <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
            </button>
            <br/>
            <Link to = "/products">Go back to Products</Link>
        </div>
    )
}