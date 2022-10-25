import QuoteList from '../components/quotes/QuoteList'

const init = [
    {
        id: 'q1',
        author: 'auxuan',
        text: 'aeact1',
    },
    { id: 'q2', author: 'buxuan2', text: 'beact2' },
];

const AllQuotes = () => {
    return <QuoteList quotes={init} />
};

export default AllQuotes;
