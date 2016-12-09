import React, { Component } from 'react';
import TopContainer from './TopContainer';
import MainContent from './MainContent';
require('../styles/main.css')

class App extends Component {
  render() {
    return (
      <div>
        <TopContainer />
        <MainContent />
      </div>
    );
  } 
}

export default App;
