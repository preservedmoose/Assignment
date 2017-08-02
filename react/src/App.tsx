import * as React from 'react';
import './App.css';
import { CountersList } from './components/countersList';

const appStyle = {
  textAlign: 'center'
};

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h1 style={appStyle}>Two Counters</h1>
        <CountersList numberOfCounters={2} />
      </div>
    );
  }
}
