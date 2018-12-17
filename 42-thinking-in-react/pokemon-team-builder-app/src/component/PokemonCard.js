import React, {Component} from 'react'

class PokemonCard extends Component{

  //this.props.removePokemonFromTeam(this.props.pokemon)
  //this.props.addPokemonToTeam(this.props.pokemon)
  render(){
    return (
      <div
        onClick={() => {this.props.onScoutOfPokemon(this.props.pokemon)}} 
        onDoubleClick={()=>{this.props.onClickOfCard(this.props.pokemon)}}
      className="pokemon card">{this.props.pokemon.name}</div>
    )
  }
}

export default PokemonCard
