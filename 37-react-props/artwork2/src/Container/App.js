import React, { Component } from 'react';
import '../App.css';
import Navbar from '../Component/Navbar'
import PaintingsContainer from './PaintingsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar
          color="pink"
          title="Pretty Art"
          tagline="property of Not Slackers"/>
        <PaintingsContainer />
      </div>
    );
  }
}

export default App;
