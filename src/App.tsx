import { useState, useEffect } from 'react';
import { Loading, Quote, Button, Footer } from './components';
import { quotes as Data } from './assets';

type QuoteData = null | { quote: string; author: string };
type ColorData = null | string;

const COLORS = [
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
];

export default function App() {
  const [quotes, setQuotes] = useState<QuoteData[]>([]);
  const [currentQuote, setCurrentQuote] = useState<QuoteData>(null);
  const [currentColor, setCurrentColor] = useState<ColorData>(null);
  const [isCopied, setIsCopied] = useState(false);

  // fetch quotes on mount and set current quote after quotes are fetched
  useEffect(() => {
    if (!quotes.length) {
      setTimeout(() => setQuotes(Data), 500);
    } else {
      handleClick();
    }
  }, [quotes]);

  const handleClick = () => {
    let currentData: [QuoteData, ColorData] = [currentQuote, currentColor];
    let [newQuote, newColor] = currentData;

    while (currentQuote === newQuote || currentColor === newColor) {
      currentData = [quotes, COLORS].map(
        (item) => item[Math.floor(Math.random() * item.length)]
      ) as [QuoteData, string];
      [newQuote, newColor] = currentData;
    }

    setCurrentQuote(newQuote);
    setCurrentColor(newColor);
  };

  const handleCopy = () => {
    if (!isCopied) {
      navigator.clipboard.writeText(
        `${currentQuote!.quote} From ${currentQuote!.author}.`
      );

      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  // check if the quotes are loaded and change color on click
  const [quote, color] = [currentQuote, currentColor] as [QuoteData, string];
  const mainColor = color ? { color, background: color } : undefined;
  const parsedText = quote ? `${quote.quote} From ${quote.author}.` : '';

  return (
    <div className='App' style={mainColor}>
      <main className='quote-container'>
        {!mainColor ? (
          <Loading />
        ) : (
          <>
            <Quote parsedText={parsedText} quote={quote!} />
            <Button
              isCopied={isCopied}
              parsedText={parsedText}
              currentColor={color}
              handleClick={handleClick}
              handleCopy={handleCopy}
            />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
