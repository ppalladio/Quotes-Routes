import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote' 
const init = [
    {
        id: 'q1',
        author: 'yuxuan',
        text: 'react1',
    },
    { id: 'q2', author: 'yuxuan2', text: 'react2' },
];
const QuoteDetail = () => {
    const params = useParams();
    const quote = init.find(quote => quote.id === params.id)
    return (
        <>
            <HighlightedQuote  text={quote.text} author={quote.author}/>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </>
    );
};

export default QuoteDetail;
