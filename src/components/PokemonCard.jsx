const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];


const PokemonCard = () => {
  let pokemon = pokemonList[0];

  return <figure className="card">
     {pokemon.imgSrc 
     ? ( <img className="card-img" src={pokemon.imgSrc} alt={pokemon.name} /> ) 
     : ( <p>???</p> )
     } 
    {/* <img src={pokemon.imgSrc} 
        alt={pokemon.name}  
        className="card-img"
      /> */}
      <figcaption> {pokemon.name} </figcaption>
  </figure>
}


export default PokemonCard;