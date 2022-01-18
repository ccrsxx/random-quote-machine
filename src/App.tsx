import { Component } from 'react';
import './App.scss';
import loading from './loading.svg';

interface AppProps {}

interface AppStates {
  currentQuote: null | { quote: string; author: string };
  currentColor: null | string;
  quotes: { quote: string; author: string }[];
  colors: string[];
}

class RandomQuoteMachine extends Component<AppProps, AppStates> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      currentQuote: null,
      currentColor: null,
      quotes: [],
      colors: [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
      ]
    };
  }

  componentDidMount() {
    fetch(
      'https://raw.githubusercontent.com/ccrsxx/random-quote-machine/main/assets/quotes.json'
    )
      .then((res) => res.json())
      .then(({ quotes }) => this.setState({ quotes }))
      .catch((err) => console.log(err));
  }

  componentDidUpdate() {
    if (!this.state.currentQuote) {
      this.getRandomQuote();
    }
  }

  getRandomQuote() {
    const [quote, color] = [this.state.quotes, this.state.colors].map(
      (item) => item[Math.floor(Math.random() * item.length)]
    ) as [{ quote: string; author: string }, string];
    this.setState({
      currentQuote: quote,
      currentColor: color
    });
  }

  render() {
    return (
      <div className='App'>
        <div id='quote-box' className='quote-box'>
          {!this.state.currentQuote ? (
            <img src={loading} alt='loading' />
          ) : (
            <>
              <div id='text' className='quote-text'>
                {this.state.currentQuote.quote}
              </div>
              <div id='author' className='quote-author'>
                {this.state.currentQuote.author}
              </div>
              <div className='button-wrapper'>
                <a href='#' id='tweet-quote'></a>
                <a href='#' id='new-quote'></a>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default RandomQuoteMachine;
