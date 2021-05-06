import "./Pokecard.css";
const POKE_API =
  "https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/";

function Pokecard({ id, name, type, exp }) {
  let imgSrc = `${POKE_API}${id}.png`;
  return (
    <div className="pokecard">
      <h2>{name}</h2>
      <img src={imgSrc} alt={name} />
      <div className="type">Type: {type}</div>
      <div className="exp">EXP: {exp}</div>
    </div>
  );
}

export default Pokecard;
