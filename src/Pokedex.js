import "./Pokedex.css";
import Pokecard from "./Pokecard";
import { Component } from "react";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="pokedex-winner">Winning Hand</h1>;
    } else {
      title = <h1 className="pokedex-loser">Losing Hand</h1>;
    }
    return (
      <div className="pokedex">
        {/* <p>Player Name:</p>
        <input className="playerName-input" type="text"></input>
        <button type="button">set name</button> */}
        <h4>Total EXP: {this.props.exp}</h4>
        <p>{title}</p>
        <div className="pokedex-cards">
          {this.props.pokemon.map((p) => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
