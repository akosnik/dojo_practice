import React, { Component } from "react";

class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.firstName,
      lastName: props.lastName,
      age: props.age,
      hairColor: props.hairColor,
    };
  }
  render() {
    return (
      <div className="personCard">
        <h1>
          {this.state.lastName}, {this.state.firstName}
        </h1>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {this.state.hairColor}</p>
        <button onClick={() => this.addAge()}>
          Birthday Button for {this.state.firstName} {this.state.lastName}
        </button>
      </div>
    );
  }
  addAge = () => {
    this.setState({ age: this.state.age + 1 });
  };
}

export default PersonCard;
