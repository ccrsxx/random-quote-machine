import { createStore, combineReducers } from 'redux';

interface reducers {
  type: string;
}

interface currentQuoteType extends reducers {
  quote: { quote: string; author: string };
}

interface currentColorType extends reducers {
  color: string;
}
const CHANGE_QUOTE_DATA = 'CHANGE_QUOTE_DATA';
const CHANGE_COLOR = 'CHANGE_COLOR';
const TOGGLE_COPY = 'TOGGLE_COPY';

const quoteDataReducer = (state = null, action: currentQuoteType) => {
  switch (action.type) {
    case CHANGE_QUOTE_DATA:
      return action.quote;
    default:
      return state;
  }
};

const changeQuote = (quoteData: currentQuoteType['quote']) => ({
  type: CHANGE_QUOTE_DATA,
  quoteData
});

const colorReducer = (state = null, action: currentColorType) => {
  switch (action.type) {
    case CHANGE_COLOR:
      return action.color;
    default:
      return state;
  }
};

const changeColor = (color: currentColorType['color']) => ({
  type: CHANGE_COLOR,
  color
});

const copyReducer = (state = false, action: reducers) => {
  switch (action.type) {
    case TOGGLE_COPY:
      return !state;
    default:
      return state;
  }
};

const toggleFlip = () => ({
  type: TOGGLE_COPY
});

const rootReducers = combineReducers({
  currentQuote: quoteDataReducer,
  currentColor: colorReducer,
  copy: copyReducer
});

const store = createStore(rootReducers);

export default store;

export { changeQuote, changeColor, toggleFlip };
