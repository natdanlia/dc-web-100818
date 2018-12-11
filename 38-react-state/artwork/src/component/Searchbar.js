import React, {Component} from 'react'

class Searchbar extends Component{
  render(){
    console.log(this.props.userInput)
    return (
      <input type="text"
        value={this.props.userInput}
        onChange={this.props.onChangeOfInput} />
    )
  }
}

export default Searchbar
