import React from 'react'

const Products = ({ products }) => {
    return (
        <ul>
            {products.map(product => <li key={product.id}><h2>{product.title}</h2><p>Author: {product.author}</p></li>)}
        </ul>
    )
}

export const getStaticProps = async () => {
    const productsData = await fetch('http://localhost:4000/products');
    const products = await productsData.json();
   
    return {
        props: {
            products
        },
        revalidate: 10
    }
} 
export default Products
