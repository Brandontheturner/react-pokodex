import React, { Component } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";

class Abilities extends Component {
  render() {
    return (
      <div>
        {this.props.data.abilities.map((item, i) => {
          return (
            <p
              key={i}
              style={{ backgroundColor: item.is_hidden ? "red" : "white" }}
            >
              {item.ability.name}
            </p>
          );
        })}
      </div>
    );
  }
}

export default Abilities;
