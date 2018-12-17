import React, {Component} from 'react'
import PokemonCard from '../component/PokemonCard'

class PokemonContainer extends Component{
  render(){
    return (
      <div>
        {this.props.allPokemon.map(p => <PokemonCard key={p.name}
          pokemon={p}
          onClickOfCard={this.props.addPokemonToTeam}
          onScoutOfPokemon={this.props.onScoutOfPokemon}
          />)}
      </div>
    )
  }
}

export default PokemonContainer
