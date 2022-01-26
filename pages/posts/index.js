import Link from "next/link";

export default function PostList({ posts }){
     return(
         <>
         <h1>List of Posts</h1>
         {
             posts.map(post => <div key={post.id}><Link href={`posts/${post.id}`}><h1>{post.id}{post.title}</h1></Link></div>)
         }
         </>
     )
} 

export const getStaticProps = async () => {
   const postData = await fetch(`https://jsonplaceholder.typicode.com/posts`);
   const posts = await postData.json();

   return {
       props: {
           posts: posts.slice(0,3)
       }
   }
}