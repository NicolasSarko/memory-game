import React from "react";

class Navbar extends React.Component {
  render() {
    const { name, score } = this.props;
    return (
      <div className="navbar">
        <div className="game-title">Memorygame</div>
        <div className="name">{name}</div>
        <div className="score">Ton Score: {score}</div>
      </div>
    );
  }
}

export default Navbar;
