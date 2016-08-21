import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import PokeList from './components/poke-list';
import PokeCard from './components/poke-card';

class App extends Component {
  constructor() {
    super();
    this.state = {pokeArr: [], selectedPokemon: null, filterString: ''};
    $.get('http://pokeapi.co/api/v2/pokemon?limit=811')
    .then((response) => this.setState({pokeArr: response.results}) )
  }

  setSelectedPokemon = (pokemon) => {
    this.setState({selectedPokemon: pokemon});
  }

  setFilter = (filterString) => {
    this.setState({filterString});
  }



  render() {
    return (
      <section>
        <h1>Pokemon Starters!</h1>
        <div style={{display:'flex'}}>
          <PokeList selectPokemon={this.setSelectedPokemon} filterString={this.state.filterString} setFilter={this.setFilter} pokemon={this.state.pokeArr}/>
          <PokeCard pokemon={this.state.selectedPokemon} />
        </div>
      </section>
    );
  }
}

export default App;
