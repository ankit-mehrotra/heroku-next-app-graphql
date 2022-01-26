
export default function CategorySearch({ articles,category }){
    return <div>
        <h2>Showing results for {category}</h2>
        {
            articles.map(article => 
            <div key={article.id}>
                <h2>{article.title}</h2>
                <p>{article.id}</p>
            </div>)
        }
    </div>
}

export const getServerSideProps = async (context) => {
    const {params,req,res,query} = context;
    console.log(query);

    const { category } = params; 
    res.setHeader('Set-Cookie',['hello=Ankit7123'] )
    const resposne = await fetch(`http://localhost:4000/news?category=${category}`);
    const data = await resposne.json();
    return {
        props:{
            category,
            articles: data
        }
    }

}