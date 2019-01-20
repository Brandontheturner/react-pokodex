import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import Abilities from "./components/abilities";
import Moves from "./components/moves";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      number: 0
    };
  }

  componentDidMount() {
    fetch("http://pokeapi.co/api/v2/pokemon/25")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ data });
      });
  }
  render() {
    if (this.state.data === null) {
      return <h1>Let me grab that for you...</h1>;
    }
    console.log(this.state);

    return (
      <div className="App">
        <h2>Podex for {this.state.data.name}</h2>
        <div classname="spriteContainer">
          <img className="sprites1" src={this.state.data.sprites.front_shiny} />
          <img className="sprites2" src={this.state.data.sprites.back_shiny} />
        </div>
        <div className="attributes">
          <div className="height">
            <h2>Height for {this.state.data.name}</h2>
            <div>{this.state.data.height}ft</div>
            <div className="weight">
              <h2>Weight for {this.state.data.name}</h2>
              {this.state.data.weight} lbs
            </div>
          </div>
        </div>
        <div className="skills">
          <h2>Abilities for {this.state.data.name}</h2>
          <Abilities data={this.state.data} />
          <Moves data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
