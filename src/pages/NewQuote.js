import { useParams } from 'react-router-dom';

const NewQuote = () => {
    const params = useParams();
    return (
        <>
            <h1> new quote</h1>
            <p>{params.quoteId}</p>
        </>
    );
};

export default NewQuote;
