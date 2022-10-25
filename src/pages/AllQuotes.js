import QuoteList from '../components/quotes/QuoteList'

const init = [
    {
        id: 'q1',
        author: 'yuxuan',
        text: 'react1',
    },
    { id: 'q2', author: 'yuxuan2', text: 'react2' },
];

const AllQuotes = () => {
    return <QuoteList quotes={init} />
};

export default AllQuotes;
