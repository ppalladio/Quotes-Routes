import QuoteList from '../components/quotes/QuoteList';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';
import { useEffect } from 'react';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
// const init = [
//     {
//         id: 'q1',
//         author: 'Oscar Wilde',
//         text: 'Be yourself; everyone else is already taken.',
//     },
//     {
//         id: 'q2',
//         author: 'Albert Einstein',
//         text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
//     },
//     {
//         id: 'q3',
//         author: 'Frank Zappa',
//         text: 'So many books, so little time.',
//     },
// ];

const AllQuotes = () => {
    const {
        sendRequest,
        status,
        data: loadedQuotes,
        error,
    } = useHttp(getAllQuotes, true);

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if (status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return <p className="centered focused">{error}</p>;
    }

    if (
        status === 'completed' &&
        (!loadedQuotes || loadedQuotes.length === 0)
    ) {
        return <NoQuotesFound />;
    }

    return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
