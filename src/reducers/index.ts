import { combineReducers } from 'redux';
import quoteReducer, { changeQuote } from './quote';
import colorReducer, { changeColor } from './color';
import copyReducer, { toggleCopy } from './isCopied';

const rootReducers = combineReducers({
  currentQuote: quoteReducer,
  currentColor: colorReducer,
  isCopied: copyReducer
});

export default rootReducers;
export type RootState = ReturnType<typeof rootReducers>;
export { changeQuote, changeColor, toggleCopy };
