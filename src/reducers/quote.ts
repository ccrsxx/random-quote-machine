const CHANGE_QUOTE_DATA = 'CHANGE_QUOTE_DATA';

interface currentQuoteType {
  type: string;
  quoteData: { quote: string; author: string };
}

const quoteReducer = (state = null, action: currentQuoteType) => {
  switch (action.type) {
    case CHANGE_QUOTE_DATA:
      return action.quoteData;
    default:
      return state;
  }
};

export const changeQuote = (quoteData: currentQuoteType['quoteData']) => ({
  type: CHANGE_QUOTE_DATA,
  quoteData
});

export default quoteReducer;
