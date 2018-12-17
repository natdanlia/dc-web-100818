import React, {Component} from 'react'
import PokemonCard from '../component/PokemonCard'

class Bench extends Component{
  render(){
    return (
      <div>
        {this.props.pokemons.map(p => <PokemonCard key={p.name}
          pokemon={p}
          onClickOfCard={this.props.removePokemonFromTeam}
          onScoutOfPokemon={this.props.onScoutOfPokemon}
          />)}
      </div>
    )
  }
}

export default Bench
