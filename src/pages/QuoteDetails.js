import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';
const QuoteDetail = () => {
    const params = useParams();
    return (
        <>
            <h1> quote detail</h1>
            <p>{params.quoteId}</p>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </>
    );
};

export default QuoteDetail;
