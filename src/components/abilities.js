import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Abilities extends Component {
  render() {
    return (
      <div>
        {this.props.data.abilities.map((item, i) => {
          return <p key={i}>{item.ability.name}</p>;
        })}
      </div>
    );
  }
}

export default Abilities;
