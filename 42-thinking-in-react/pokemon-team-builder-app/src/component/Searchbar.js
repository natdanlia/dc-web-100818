import React, {Component} from 'react'

class Searchbar extends Component{
  render(){
    return (
      <input onChange={this.props.onChange} className="search" type="text" />
    )
  }
}

export default Searchbar
