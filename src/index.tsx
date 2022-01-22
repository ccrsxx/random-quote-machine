import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import rootReducers, {
  changeQuote,
  changeColor,
  toggleCopy,
  RootState
} from './reducers';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducers);

const mapStateToProps = (state: RootState) => ({
  currentQuote: state.currentQuote,
  currentColor: state.currentColor,
  isCopied: state.isCopied
});

const mapDispatchToProps = (dispatch = store.dispatch) => ({
  changeCurrentQuote(quote: { quote: string; author: string }) {
    dispatch(changeQuote(quote));
  },
  changeCurrentColor(color: string) {
    dispatch(changeColor(color));
  },
  toggleCopy() {
    dispatch(toggleCopy());
  }
});

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Container />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
