import * as React from 'react';
import './App.css';
import CountersList from './components/counters-list.component';

var appStyle = {
  textAlign: 'center'
};

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h1 style={appStyle}>Two Counters</h1>
        <CountersList />
      </div>
    );
  }
}

export default App;
