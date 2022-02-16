import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClipboard,
  faClipboardCheck
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

interface ButtonProps {
  isCopied: boolean;
  parsedText: string;
  currentColor: string;
  handleClick: () => void;
  handleCopy: () => void;
}

export function Button({
  isCopied,
  parsedText,
  currentColor,
  handleCopy,
  handleClick
}: ButtonProps) {
  return (
    <div className='button-wrapper'>
      <a
        type='button'
        className='tweet-quote'
        href={`https://twitter.com/intent/tweet?text=${parsedText}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon icon={faTwitter} /> Tweet
      </a>
      {!isCopied ? (
        <button
          type='button'
          className='copy-to-clipboard'
          onClick={handleCopy}
        >
          <FontAwesomeIcon icon={faClipboard} /> Copy
        </button>
      ) : (
        <button type='button' className='copy-to-clipboard copied'>
          <FontAwesomeIcon icon={faClipboardCheck} /> Copied!
        </button>
      )}
      <button
        type='button'
        className='new-quote'
        style={{ background: currentColor }}
        onClick={handleClick}
      >
        New quote
      </button>
    </div>
  );
}
