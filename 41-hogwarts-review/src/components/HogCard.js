import React from 'react'

class HogCard extends React.Component{
  constructor(){
    super()
    this.state = {
      details: false
    }
  }

  formatHogName = () => {
    let noSpaceName = this.props.hog.name.toLowerCase().split(" ").join("_")
    // this.props.hog.name.toLowerCase().replace(/\s+/g, "_")
    return require(`../hog-imgs/${noSpaceName}.jpg`)
  }

  handleClick = () => {
    this.setState({details: !this.state.details})
  }

  render(){
    return(
      <div className="card">
        <div className="image">
          <img src={this.formatHogName()}/>
        </div>
        <div className="content">
          <div className="header">
           <p>{this.props.hog.name}</p>
          </div>
          <button onClick={this.handleClick}>Show/Hide Deets</button>
           <div className="description">
            {this.state.details ?
              <p>Weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
                 Specialty: {this.props.hog.specialty}
                 Highest Award: {this.props.hog['highest medal achieved']}
                 Greasy: {this.props.hog.greased ? "yes" : "no"}
              </p>
            : null
            }
           </div>
        </div>

      </div>
    )
  }
}

export default HogCard
