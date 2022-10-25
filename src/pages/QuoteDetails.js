import { useParams, Route, Link } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
const init = [
    {
        id: 'q1',
        author: 'suxuan',
        text: 'deact1',
    },
    { id: 'q2', author: 'quxuan2', text: 'aeact2' },
];
const QuoteDetail = () => {
    const params = useParams();
    const quote = init.find((quote) => quote.id === params.quoteId);
    // console.log(quote.text);
    return (
        <>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={`/quotes/${params.quoteId}`} exact>
                <div className="centered">
                    <Link
                        className="btn--flat"
                        to={`quotes/${params.quoteId}/comments`}
                    >
                        loadingSpinner
                    </Link>
                </div>
            </Route>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </>
    );
};

export default QuoteDetail;
