import React, {Component} from 'react'

class Scouting extends Component{
  render(){
    return this.props.pokemon ? (
      <div className="card details">
        <div>
          <div className="row">{this.props.pokemon.name}</div>
          <div className="row">
          <div><img alt={this.props.pokemon.name} src={`${this.props.pokemon.sprites.front_default}`} /></div>
            {this.props.pokemon.stats.map(stat => (<div key={stat.stat.name} className="block">{stat.stat.name}: {stat.base_stat}
              </div>))}

          </div>
        </div>
      </div>
    ) : null
  }
}

export default Scouting
