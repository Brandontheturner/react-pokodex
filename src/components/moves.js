import React, { Component } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";

class Moves extends Component {
  render() {
    return (
      <div>
        <h1>Moves for {this.props.data.name}</h1>
        {this.props.data.moves.map((item, i) => {
          return <p key={i}>{item.move.name}</p>;
        })}
      </div>
    );
  }
}

export default Moves;
