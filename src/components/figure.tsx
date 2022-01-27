interface FigureProps {
  parsedText: string;
  quoteData: { quote: string; author: string };
}

export const Figure = (props: FigureProps) => (
  <figure id='quote-box' className='quote-box' key={props.parsedText}>
    <blockquote id='text' className='quote-text fade'>
      <p>{props.quoteData.quote}</p>
    </blockquote>
    <figcaption id='author' className='quote-author fade'>
      - {props.quoteData.author}
    </figcaption>
  </figure>
);
