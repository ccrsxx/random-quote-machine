import React from 'react';
import './App.scss';

interface AppProps {}

interface AppStates {}

class RandomQuoteMachine extends React.Component<AppProps, AppStates> {
  constructor(props: AppProps) {
    super(props);
    this.state = {};
  }

  render() {
    return <h1>Hello World</h1>;
  }
}

export default RandomQuoteMachine;
