import QuoteList from '../components/quotes/QuoteList'

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

const AllQuotes = () => {
    return <QuoteList quotes={init} />
};

export default AllQuotes;
