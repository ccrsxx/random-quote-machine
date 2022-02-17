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
  const copyButton = isCopied
    ? { message: 'Copied!', style: 'copied', icon: faClipboardCheck }
    : { message: 'Copy', style: '', icon: faClipboard };
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
      <button
        type='button'
        className={`copy-to-clipboard ${copyButton.style}`}
        onClick={handleCopy}
      >
        <FontAwesomeIcon icon={copyButton.icon} /> {copyButton.message}
      </button>
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
