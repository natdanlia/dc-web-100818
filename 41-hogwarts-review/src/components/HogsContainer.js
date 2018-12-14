import React from 'react'
import HogCard from './HogCard'


class HogsContainer extends React.Component {
  render(){
    return(
      <div className="ui cards">
        {this.props.hogs.map(hog => <HogCard hog={hog}/>)}
      </div>
    )
  }
}

export default HogsContainer
