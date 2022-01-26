
export default function Post({post}){
    
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

export const getStaticPaths = async () => {
    // const postData = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    // const posts = await postData.json();
    // const paths = posts.map(post => ({
    //     params:{
    //         postId: `${post.id}`
    //     }
    // }))
    return {
        paths:[
            {
                params: { postId: '1'},

            },
            {
                params: { postId: '2'},

            },
            {
                params: { postId: '3'},

            }
        ],
        fallback: 'blocking'
    }
}
export const getStaticProps = async ({ params: {postId} }) => {
    const postData = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await postData.json();
    console.log('Generating page for ', postId)
    return {
        props: {
            post
        }
    }
}