import React, { Component } from 'react';
import './App.css'; 
import CardList from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';

class App extends Component {
	constructor() {
		super()
		this.state = {
			monsters: [],
			searchField: ""
		}
	}

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json()) 
        .then(username => this.setState({monsters: username}))
	}
    
   render() {
	   const {monsters, searchField} = this.state;
	   const filteredMoster = monsters.filter(
		   monster => monster.name.toLowerCase().includes(searchField.toLowerCase()) 
	   )
		return (
			<div className="App">
				<h1>Monstar Rolodex</h1>
				<SearchBox 
					placeholder="Search monstar"
					handleChange={e => {this.setState({searchField: e.target.value})}}
				/>
				<CardList monsters={filteredMoster} /> 
			</div>
		);
  	}
}

export default App


//<h1>{this.state.monsters.map(monstart => (monstart.name))}<br/></h1>
