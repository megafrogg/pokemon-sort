import React, {Component} from 'react';

const PokeCard = ({pokemon}) => {
  return pokemon ?
    <section>
      <h1>{pokemon.name}</h1>
      <img src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`} />
      {pokemon.types.map(a => a).sort((a, b) => a.slot - b.slot).map(t => <h3>Type {t.slot}: {t.type.name}</h3>)}
    </section>
    : <h2> No Pokemon Selected </h2>
}

export default PokeCard;
