import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

// by changing function App to class, we get access to the state
class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => console.log(response))
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
      <CardList name='Dani'/>
        {this.state.monsters.map(monster => (
            <h1 key={monster.id}>{monster.name}</h1>            
        ))}
      </div>
    )
  }
}

export default App;
