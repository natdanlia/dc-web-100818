import React, {Component} from 'react'
import Painting from '../component/Painting'
import paintings from '../data/paintings'
import Searchbar from '../component/Searchbar'
import PaintingDetails from '../component/PaintingDetails'

class PaintingsContainer extends Component{
  constructor(){
    super()
    this.state = {
      userInput: "",
      currentPainting: null
    }
  }

  handleChange = (event) => {
    //change the state of userInput
    //because this method has access to this.State
    let searchTerm = event.currentTarget.value
    this.setState({
      userInput: searchTerm
    })
  }

  handleClick = (paintingObj) => {
    this.setState({
      currentPainting:paintingObj
    })
    console.log('hello')
    //this.state.currentPainting = paintingObj <- this is bad.
  }

  getFilteredPaintings = () => {
    return paintings.filter(painting => painting.title.includes(this.state.userInput))
  }

  render(){
    return (
      <div>
        <PaintingDetails paintingToDisplay={this.state.currentPainting}/>
        <Searchbar
          userInput={this.state.userInput}
          onChangeOfInput={this.handleChange}/>
        {this.getFilteredPaintings().map(painting =>
          <Painting
            key={painting.id}
            painting={painting}
            onSelectPainting={this.handleClick}
          />)}
      </div>
    )
  }
}

export default PaintingsContainer
