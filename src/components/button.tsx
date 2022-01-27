import {
  FontAwesomeIcon,
  faTwitter,
  faClipboard,
  faClipboardCheck,
  CallbackFunction
} from '../utils';

interface ButtonProps {
  isCopied: boolean;
  parsedText: string;
  currentColor: string;
  handleClick: CallbackFunction;
  handleCopy: CallbackFunction;
}

export const Button = (props: ButtonProps) => (
  <div className='button-wrapper'>
    <a
      id='tweet-quote'
      className='tweet-quote'
      href={`https://twitter.com/intent/tweet?text=${props.parsedText}`}
      target='_blank'
      rel='noopener noreferrer'
    >
      <FontAwesomeIcon icon={faTwitter} /> Tweet
    </a>
    {!props.isCopied ? (
      <button className='copy-to-clipboard' onClick={props.handleCopy}>
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
      style={{ background: props.currentColor }}
      onClick={props.handleClick}
    >
      New quote
    </button>
  </div>
);
