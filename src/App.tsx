import { Component } from 'react';
import { Loading, Figure, Button, Footer } from './components';
import type {
  quoteData,
  CallbackFunction,
  CallbackFunctionVariadic
} from './utils';
import './App.scss';

interface AppProps {
  currentQuote: null | quoteData;
  currentColor: null | string;
  isCopied: boolean;
  changeCurrentQuote: CallbackFunctionVariadic;
  changeCurrentColor: CallbackFunctionVariadic;
  toggleCopy: CallbackFunction;
}

interface AppStates {
  quotes: quoteData[];
  colors: string[];
}

class RandomQuoteMachine extends Component<AppProps, AppStates> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
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
      'https://raw.githubusercontent.com/ccrsxx/random-quote-machine/main/src/assets/quotes.json'
    )
      .then((res) => res.json())
      .then(({ quotes }) => this.setState({ quotes }))
      .then(() => setTimeout(() => this.getRandomQuote(), 500))
      .catch((err) => console.log(err));
  }

  getRandomQuote() {
    let currentData: [AppProps['currentQuote'], AppProps['currentColor']] = [
      this.props.currentQuote,
      this.props.currentColor
    ];

    let [quote, color] = currentData;

    while (
      this.props.currentQuote === quote ||
      this.props.currentColor === color
    ) {
      currentData = [this.state.quotes, this.state.colors].map(
        (item) => item[Math.floor(Math.random() * item.length)]
      ) as [quoteData, string];
      [quote, color] = currentData;
    }

    this.props.changeCurrentQuote(quote);
    this.props.changeCurrentColor(color);
  }

  handleClick() {
    this.getRandomQuote();
  }

  handleCopy() {
    navigator.clipboard.writeText(
      `${this.props.currentQuote?.quote} From ${this.props.currentQuote?.author}.`
    );

    this.props.toggleCopy();

    setTimeout(() => {
      this.props.toggleCopy();
    }, 2500);
  }

  render() {
    const [quoteData, currentColor] = [
      this.props.currentQuote,
      this.props.currentColor
    ] as [quoteData, string];

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
            <Loading />
          ) : (
            <>
              <Figure parsedText={parsedText} quoteData={quoteData} />
              <Button
                isCopied={this.props.isCopied}
                parsedText={parsedText}
                currentColor={currentColor}
                handleClick={this.handleClick}
                handleCopy={this.handleCopy}
              />
            </>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default RandomQuoteMachine;
