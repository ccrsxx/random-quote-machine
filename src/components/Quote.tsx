interface FigureProps {
  parsedText: string;
  quote: { quote: string; author: string };
}

export function Quote({ parsedText, quote }: FigureProps) {
  return (
    <figure className='quote-box' key={parsedText}>
      <blockquote className='quote-text fade'>
        <p>{quote.quote}</p>
      </blockquote>
      <figcaption className='quote-author fade'>- {quote.author}</figcaption>
    </figure>
  );
}
