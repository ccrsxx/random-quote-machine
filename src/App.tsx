import { Component } from 'react';
import './App.scss';
import loading from './loading2.svg';

interface DefaultData {
  quoteData: { quote: string; author: string };
}

interface AppStates {
  currentQuote: null | DefaultData['quoteData'];
  currentColor: null | string;
  quotes: DefaultData['quoteData'][];
  colors: string[];
}

class RandomQuoteMachine extends Component<{}, AppStates> {
  constructor(props: {}) {
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
    this.getRandomQuote = this.getRandomQuote.bind(this);
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
    let currentData: [AppStates['currentQuote'], AppStates['currentColor']] = [
      this.state.currentQuote,
      this.state.currentColor
    ];

    let [quote, color] = currentData;

    while (
      this.state.currentQuote === quote ||
      this.state.currentColor === color
    ) {
      currentData = [this.state.quotes, this.state.colors].map(
        (item) => item[Math.floor(Math.random() * item.length)]
      ) as [DefaultData['quoteData'], string];
      [quote, color] = currentData;
    }

    this.setState({
      currentQuote: quote,
      currentColor: color
    });
  }

  render() {
    const [quoteData, currentColor] = [
      this.state.currentQuote,
      this.state.currentColor
    ] as [DefaultData['quoteData'], string];

    const mainColor = currentColor
      ? { color: currentColor, background: currentColor }
      : undefined;

    return (
      <div className='App' style={mainColor}>
        <figure id='quote-box' className='quote-box'>
          {!this.state.currentQuote ? (
            <img src={loading} alt='loading' />
          ) : (
            <>
              <blockquote id='text' className='quote-text'>
                {quoteData.quote}
              </blockquote>
              <figcaption id='author' className='quote-author'>
                - {quoteData.author}
              </figcaption>
              <div className='button-wrapper' onClick={this.getRandomQuote}>
                <a id='tweet-quote' className='tweet-quote'></a>
                <a
                  id='new-quote'
                  className='new-quote'
                  style={{ background: currentColor }}
                >
                  New quote
                </a>
              </div>
            </>
          )}
        </figure>
      </div>
    );
  }
}

export default RandomQuoteMachine;
