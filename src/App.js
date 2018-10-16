import React, { Component } from 'react';
import Feed from './components/Feed'; 
import Header from './components/Header'; 

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
        <Feed/>
      </div>
    );
  }
}

export default App;
