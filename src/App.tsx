import React from 'react';
import './App.scss';

interface AppProps {}

interface AppStates {
  quotes: { quote: string; author: string }[];
}

class RandomQuoteMachine extends React.Component<AppProps, AppStates> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      quotes: []
    };
  }

  componentDidMount() {}

  render() {
    return <h1>Hello World</h1>;
  }
}

export default RandomQuoteMachine;
