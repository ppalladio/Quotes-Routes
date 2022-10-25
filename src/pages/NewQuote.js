import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router-dom';
const NewQuote = () => {
    const history = useHistory();
    const addQuoteHandler = (quoteData) => {
        history.push('/quotes'); history.
        //' push allows users to go back, replace doesnt.
    };
    return (
        <>
            <QuoteForm onAddQuote={addQuoteHandler} />
        </>
    );
};

export default NewQuote;
