import React, { Component } from 'react';
import './App.css';
import Grid from './Grid';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div>
        <Grid />
      </div>
    );
  }
}

export default App;
