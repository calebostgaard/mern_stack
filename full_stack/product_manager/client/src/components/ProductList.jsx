import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import { Button } from '@material-ui/core';


export default props => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }
    return (
        <div>
            {props.products.map((product, idx)=>{
                return <p key={idx}>
                    <Link to = {`/product/${product._id}`}>{product.title}</Link>
                    <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
                    </p>
            })}
        </div>
    )
}
