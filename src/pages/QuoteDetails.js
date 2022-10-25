import { useParams, Route, Link,useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
const init = [
    {
        id: 'q1',
        author: 'Oscar Wilde',
        text: 'Be yourself; everyone else is already taken.',
    },
    {
        id: 'q2',
        author: 'Albert Einstein',
        text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe"
    },
    {
        id:'q3',
        author:'Frank Zappa',
        text:'So many books, so little time.'
    }
];
const QuoteDetail = () => {
    const match = useRouteMatch()
    const params = useParams();
    const quote = init.find((quote) => quote.id === params.quoteId);
    if (!quote) {
        return <p>No quote found!</p>;
    }
    // console.log(quote.text);
    console.log(match);
    return (
        <>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={match.path} exact>
                <div className="centered">
                    <Link
                        className="btn--flat"
                        to={`${match.url}/comments`}
                    >
                        Load Comments
                    </Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </>
    );
};

export default QuoteDetail;
