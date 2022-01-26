
export default function NewsPage({ articles }){
    return <div>
        {articles.map(article => <h2 key={article.id}>{article.id} {article.title} | {article.category}</h2>
            )}
    </div>
}

export async function getServerSideProps(){
    const response = await fetch('http://localhost:4000/news');
    const news = await response.json();
    return {
        props:{
            articles: news
        }
    }
}