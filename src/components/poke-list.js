import React, {Component} from 'react';
import $ from 'jquery';

export default class PokeList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokeArr: props.pokemon
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({pokeArr: newProps.pokemon})
    this.setState({pokeArr: newProps.pokemon.filter(poke => poke.name.includes(newProps.filterString))});
  }

  pokeFilter = (event) => {
    this.props.setFilter(event.target.value);
  }

  pokeSortAscending = () => {
    this.setState({pokeArr: this.state.pokeArr.map(a => a).sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)});
  }

  pokeSortDescending = () => {
    this.setState({pokeArr: this.state.pokeArr.map(a => a).sort((a, b) => a.name < b.name ? 1 : a.name > b.name ? -1 : 0)});
  }

  resetSort = () => {
    this.setState({pokeArr: this.props.pokemon})
    this.refs.pokeInput.value = ''
  }

  getPokemon = (pokemon) => () => {
    $.get(pokemon.url)
    .then(response => this.props.selectPokemon(response));
  }

  render() {
    return (
      <section>
        <input ref='pokeInput' type='text' onChange={this.pokeFilter} />
        <button onClick={this.pokeSortAscending}>Sort Alphabetically Ascending</button>
        <button onClick={this.pokeSortDescending}>Sort Alphabetically Descencing</button>
        <button onClick={this.resetSort}>Reset Sort</button>
        <ol>
          {this.state.pokeArr.map(poke => <li key={poke.name} onClick={this.getPokemon(poke)}>{poke.name}</li>)}
        </ol>
      </section>
    );
  }

}
