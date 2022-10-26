import QuoteForm from '../components/quotes/QuoteForm';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';
const NewQuote = () => {
    const { sendRequest, status } = useHttp(addQuote);
    const history = useHistory();
    useEffect(() => {
        if (status === 'completed') {
            history.push('/quotes');
        }
    }, [status, history]);

    const addQuoteHandler = (quoteData) => {
        sendRequest(quoteData);
        history.push('/quotes');
        // ' push allows users to go back to previous page, replace doesnt.
    };
    return (
        <QuoteForm
            isLoading={status === 'pending'}
            onAddQuote={addQuoteHandler}
        />
        //.'show loading spinner' */}
    );
};

export default NewQuote;
