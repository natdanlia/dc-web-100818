import React from "react";

class Pet extends React.Component {
  // method that conditionally renders the correct gender symbol for each pet
  // invoked immediately when the <Pet /> component renders, - returning a span - containing the correct symnbol
  selectGenderSymbol = pet => {
    if (pet.gender === "male") {
      return <span>♂</span>;
    } else {
      return <span>♀</span>;
    }
  };

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.selectGenderSymbol(this.props.pet)}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button
              className="ui primary button"
              onClick={() => this.props.onAdoptPet(this.props.pet)}
            >
              Adopt pet
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Pet;
