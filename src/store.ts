// import { createStore, combineReducers } from 'redux';

// const CHANGE_QUOTE_DATA = 'CHANGE_QUOTE_DATA';
// const CHANGE_COLOR = 'CHANGE_COLOR';
// const TOGGLE_COPY = 'TOGGLE_COPY';

// interface reducers {
//   type: string;
//   [key: string]: any;
// }

// const quoteDataReducer = (state = null, action: reducers) => {
//   switch (action.type) {
//     case CHANGE_QUOTE_DATA:
//       return action.quoteData;
//     default:
//       return state;
//   }
// };

// const changeQuoteData = (quoteData: string) => ({
//   type: CHANGE_QUOTE_DATA,
//   quoteData
// });

// const colorReducer = (state = null, action: reducers) => {
//   switch (action.type) {
//     case CHANGE_COLOR:
//       return action.color;
//     default:
//       return state;
//   }
// };

// const changeColor = (color: reducers) => ({
//   type: CHANGE_COLOR,
//   color
// });

// const copyReducer = (state = false, action: reducers) => {
//   switch (action.type) {
//     case TOGGLE_COPY:
//       return !state;
//     default:
//       return state;
//   }
// };

// const toggleFlip = () => ({
//   type: TOGGLE_COPY
// });

// const rootReducers = combineReducers({
//   currentQuote: quoteDataReducer,
//   currentColor: colorReducer,
//   copy: copyReducer
// });

// const store = createStore(rootReducers);

// console.log(store);
// console.log(store.getState());

// store.dispatch(toggleFlip());

// console.log(store.getState());

export default undefined;
