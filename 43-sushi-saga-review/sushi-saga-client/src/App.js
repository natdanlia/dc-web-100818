import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushi: [],
    currentIndex: 0,
    // currentSushi: [], //alternative method to render current Sushi. Make sure to update at the same time as currentIndex!!
    eaten: [],
    money: 100,
  }

  componentDidMount() {
    fetch(API).then(res => res.json())
    .then(sushiData =>
      this.setState({
        sushi: sushiData,
        // currentSushi: sushiData.slice(0, 4),
      }, () => {console.log(this.state)}) //second argument in setState is a callback to be executed after state is updated
    )
  }

  moreSushi = (e) => {
    let newIndex = this.state.currentIndex + 4
    this.setState({
      currentIndex: newIndex,
      // currentSushi: this.state.sushi.slice(newIndex, newIndex + 4),
    })
  }

  eatSushi = (sushi) => {
    const alreadyEaten = this.state.eaten.find(sush => sush.id === sushi.id); //checking against primative values is generally safer that comparing objects

    const afford = this.state.money >= sushi.price;
    // if not eaten && can afford
    if (!alreadyEaten && afford) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        money: this.state.money - sushi.price,
      }, () => {console.log(this.state.eaten)})
    } else {
      alert('Hands off, broke boy.');
    }
  }

  currentSushi = () => {
    // as state.currentIndex is updated, this function will be called again with the new index!
    return this.state.sushi.slice(this.state.currentIndex, this.state.currentIndex + 4)
  }

  render() {
    return (
      <div className="app">
        <SushiContainer currentSushi={this.currentSushi()}
          moreSushi={this.moreSushi} eatSushi={this.eatSushi} eaten={this.state.eaten}/>
        <Table eaten={this.state.eaten} money={this.state.money} />
      </div>
    );
  }
}

export default App;
