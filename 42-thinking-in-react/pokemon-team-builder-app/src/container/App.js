import React, { Component } from 'react';
import '../App.css';
import Bench from './Bench'
import Scouting from '../component/Scouting'
import Searchbar from '../component/Searchbar'
import PokemonContainer from './PokemonContainer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      allPokemon: [],
      scoutedPokemon: null,
      pokemonTeam: [],
      searchText: ""
    }
  }

  onSearch = (event) => {
    this.setState({
      searchText: event.currentTarget.value
    })
  }

  componentDidMount(){
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then(res => res.json()).then(pokemonData => {
      this.setState({
        allPokemon: pokemonData.results
      })
    })
  }

  addPokemonToTeam = (pokemonObj) => {
    if(this.state.pokemonTeam.length < 6){
        this.setState({
          pokemonTeam: [...this.state.pokemonTeam, pokemonObj]
      })
    }
  }

  removePokemonFromTeam = (pokemonObj) => {
    let newTeam = [...this.state.pokemonTeam]
    let pokemonToRemoveIndex = this.state.pokemonTeam.indexOf(pokemonObj)
    newTeam.splice(pokemonToRemoveIndex, 1)
    this.setState({
      pokemonTeam: newTeam
    })
  }

  filteredPokemon = () => {
    let filtered =  this.state.allPokemon.filter(pokemon => {
      return !this.state.pokemonTeam.includes(pokemon)
    })
    return filtered.filter(pokemon => pokemon.name.includes(this.state.searchText))
  }

  onScoutOfPokemon = (pokemonObj) => {
    fetch(`${pokemonObj.url}`).then(res =>res.json()).then(pokemon => {
      this.setState({
        scoutedPokemon: pokemon
      })
    })
  }

  render() {
    return (
      <div className="App">
        <img alt="Pokemon" width="200" src="https://d33wubrfki0l68.cloudfront.net/42936b3e4d03c9b7c5927e3752a36cef7ff8bdf0/53627/images/pokemon.png"/>
        <Bench
          pokemons={this.state.pokemonTeam}
          removePokemonFromTeam={this.removePokemonFromTeam}
          onScoutOfPokemon={this.onScoutOfPokemon}
        />
        <Scouting pokemon={this.state.scoutedPokemon}/>
        <Searchbar onChange={this.onSearch}/>
        <PokemonContainer
          allPokemon={this.filteredPokemon()}
          addPokemonToTeam={this.addPokemonToTeam}
          onScoutOfPokemon={this.onScoutOfPokemon}
        />
      </div>
    );
  }
}

export default App;
