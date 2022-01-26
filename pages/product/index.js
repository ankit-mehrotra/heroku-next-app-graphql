import React from 'react'
import Link from 'next/link';

const Product = () => {
    return (
        <div>
            <Link href='/'>
                <a>Home</a>
            </Link>
           <h2>
               <Link href='/product/1'>
                   <a>Product 1</a>
               </Link>
           </h2>
           <h2>
               <Link href='/product/3' replace>
                   <a>Product 2</a>
               </Link>
           </h2>
           <h2>
               <Link href='/product/3'>
                   <a>Product 3</a>
               </Link>
           </h2>
        </div>
    )
}

export default Product
