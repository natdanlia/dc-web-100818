import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  // "Container", "List", or "Plural" component - accepts an array of objects as props,
  // maps each object to a "Singular" <Pet /> component as a prop
  render() {
    console.log(this.props.pets);
    return (
      <div className="ui cards">
        {this.props.pets.map(pet => (
          <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} key={pet.id} />
        ))}
      </div>
    );
  }
}

export default PetBrowser;
