import React from 'react'
import { useRouter } from 'next/router';

const ProductDetails = () => {
    const { query: { productId: id}} = useRouter()
    return (
        <div>
           Product Detail Page {id}
        </div>
    )
}

export default ProductDetails
