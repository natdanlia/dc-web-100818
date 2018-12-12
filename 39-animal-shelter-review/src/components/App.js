import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
  }

  // method that sets the state to keep track of the selected filter type.
  // passed as a prop to the <Filters /> component, invoked when the dropdown changes
  onChangeType = event => {
    this.setState({
      filters: { type: event.target.value }
    });
  };

  // method that fetches pets based on the current filter type in state.
  // passed as a prop to the <Filters /> component, invoked when the 'Find Pets' button is clicked
  fetchPets = () => {
    let filterType = this.state.filters.type;
    if (filterType == "all") {
      fetch(`/api/pets`)
        .then(res => res.json())
        .then(json => this.setState({ pets: json }));
    } else {
      fetch(`/api/pets?type=${filterType}`)
        .then(res => res.json())
        .then(json => this.setState({ pets: json }));
    }
  };

  // method that updates an individual pet's 'isAdopted' status
  // passed as a prop to each Pet component via PetBrowser, invoked when the 'Adopt Me' button is clicked
  // makes a *copy* of the current pets array in state, updates the pet passed as an argument within that array, and
  // sets the state to the updated pets array
  onAdoptPet = pet => {
    // console.log("adopt button clicked", pet);
    // const spreadPets = [...this.state.pets];
    // const petToAdopt = spreadPets.find(p => p.id === pet.id);
    // console.log("adopt me", petToAdopt);
    const pets = this.state.pets.map(p => {
      if (pet.id === p.id) {
        // p.isAdopted = !p.isAdopted;
        // return p;
        return { ...p, isAdopted: true };
      } else {
        return p;
      }
    });
    this.setState({
      pets: pets
    });
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                fetchPets={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
