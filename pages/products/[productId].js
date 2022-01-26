import { useRouter } from 'next/router';


const ProductDetails = ({ product }) => {
    const router = useRouter();
    if(router.isFallback){
        return <h2>Loading..</h2>
    }
    return (<div>
        <h2>{product.title}</h2>
        <p>{product.author}</p>
    </div>
    )
}

export const getStaticPaths = async () => {
//    const productData = await fetch('http://localhost:4000/products');
//    const products = await productData.json();
//    const paths = products.map(product => ({
//        params: {
//          productId: `${product.id}`
//        }
//    }));
   return {
       paths: [{params: { productId: '1'}}],
       fallback: true
   }
}

export const getStaticProps = async ({params: { productId }}) => {
  const productDetail = await fetch(`http://localhost:4000/products/${productId}`);
  const product = await productDetail.json();

  return {
      props: {
          product
      }
  }

}

export default ProductDetails;