import { useRouter} from 'next/router'

const Review = () => {
    const { query } = useRouter();
    const { productId, reviewId } = query;
    return (
        <div>
            ProductId{productId} 
            <p>REviewId: {reviewId}</p>
        </div>
    )
}

export default Review
