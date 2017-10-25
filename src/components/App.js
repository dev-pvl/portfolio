import React, { Component } from 'react';
import Header from './Header'
import Main from './Main'
import 'normalize.css';
import '../scss/App.scss';

class App extends Component {
  render() {
    return ((
      <div className="wrap">
        <Header />
        <Main />
      </div>
    ));
  }
}

export default App;
