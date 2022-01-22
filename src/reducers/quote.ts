const CHANGE_QUOTE_DATA = 'CHANGE_QUOTE_DATA';

export interface currentQuoteType {
  type: string;
  quote: { quote: string; author: string };
}

const quoteReducer = (state = null, action: currentQuoteType) => {
  switch (action.type) {
    case CHANGE_QUOTE_DATA:
      return action.quote;
    default:
      return state;
  }
};

export const changeQuote = (quoteData: currentQuoteType['quote']) => ({
  type: CHANGE_QUOTE_DATA,
  quoteData
});

export default quoteReducer;
