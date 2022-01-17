import React from 'react';
import './App.scss';

interface AppProps {}

interface AppStates {
  quotes: { quote: string; author: string }[];
}

// const getData = async () => {
//   const url =
//     'https://raw.githubusercontent.com/ccrsxx/random-quote-machine/main/asets/quotes.json';
//   let data = null;

//   try {
//     data = await fetch(url);
//     if (data.status !== 200) {
//       throw data.status;
//     }
//   } catch (e) {
//     console.log('ERROR', e);
//   }

//   return data?.json();
// };

// getData()
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

class RandomQuoteMachine extends React.Component<AppProps, AppStates> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      quotes: []
    };
  }

  async componentDidMount() {
    await fetch(
      'https://raw.githubusercontent.com/ccrsxx/random-quote-machine/main/assets/quotes.json'
    )
      .then((raw) => raw.json())
      .then(({ quotes }) => {
        this.setState({
          quotes
        });
      });
  }

  render() {
    console.log(this.state.quotes);
    return <h1>Hello World</h1>;
  }
}

export default RandomQuoteMachine;
