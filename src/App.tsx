import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClipboard,
  faClipboardCheck
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import loading from './loading.svg';
import './App.scss';

interface DefaultData {
  quoteData: { quote: string; author: string };
}

interface AppProps {
  copy: boolean;
  currentQuote: null | DefaultData['quoteData'];
  currentColor: null | string;
}

interface AppStates {
  copy: boolean;
  currentQuote: null | DefaultData['quoteData'];
  currentColor: null | string;
  quotes: DefaultData['quoteData'][];
  colors: string[];
}

class RandomQuoteMachine extends Component<{}, AppStates> {
  constructor(props: {}) {
    super(props);
    this.state = {
      copy: false,
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
    this.handleClick = this.handleClick.bind(this);
    this.handleCopy = this.handleCopy.bind(this);
  }

  componentDidMount() {
    fetch(
      'https://raw.githubusercontent.com/ccrsxx/random-quote-machine/main/assets/quotes.json'
    )
      .then((res) => res.json())
      .then(({ quotes }) => this.setState({ quotes }))
      .then(() => setTimeout(() => this.getRandomQuote(), 500))
      .catch((err) => console.log(err));
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

  handleClick() {
    this.getRandomQuote();
  }

  handleCopy() {
    navigator.clipboard.writeText(
      `${this.state.currentQuote?.quote} From ${this.state.currentQuote?.author}.`
    );

    this.setState({
      copy: true
    });

    setTimeout(() => {
      this.setState({
        copy: false
      });
    }, 2500);
  }

  render() {
    const [quoteData, currentColor] = [
      this.state.currentQuote,
      this.state.currentColor
    ] as [DefaultData['quoteData'], string];

    const mainColor = currentColor
      ? { color: currentColor, background: currentColor }
      : undefined;

    const parsedText = quoteData
      ? `${quoteData.quote} From ${quoteData.author}.`
      : '';

    return (
      <div className='App' style={mainColor}>
        <div className='quote-container'>
          {!mainColor ? (
            <img src={loading} alt='loading logo' />
          ) : (
            <figure id='quote-box' className='quote-box' key={parsedText}>
              <blockquote id='text' className='quote-text fade'>
                <p>{quoteData.quote}</p>
              </blockquote>
              <figcaption id='author' className='quote-author fade'>
                - {quoteData.author}
              </figcaption>
            </figure>
          )}
          {mainColor && (
            <div className='button-wrapper'>
              <a
                id='tweet-quote'
                className='tweet-quote'
                href={`https://twitter.com/intent/tweet?text=${parsedText}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon icon={faTwitter} /> Tweet
              </a>
              {!this.state.copy ? (
                <button className='copy-to-clipboard' onClick={this.handleCopy}>
                  <FontAwesomeIcon icon={faClipboard} /> Copy
                </button>
              ) : (
                <button className='copy-to-clipboard copied'>
                  <FontAwesomeIcon icon={faClipboardCheck} /> Copied!
                </button>
              )}
              <button
                id='new-quote'
                className='new-quote'
                style={{ background: currentColor }}
                onClick={this.handleClick}
              >
                New quote
              </button>
            </div>
          )}
        </div>
        <footer className='footer'>
          by{' '}
          <a
            href='https://ccrsxx.github.io/#contact'
            target='_blank'
            rel='noopener noreferrer'
          >
            ccrsxx
          </a>
        </footer>
      </div>
    );
  }
}

export default RandomQuoteMachine;
