import React, { Component } from 'react';
import Cardlist from './cardlist';
import {robots} from './robots';
import SearchBox from './SearchBox'


class App extends Component{
    constructor(){
        super()
        this.state= {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>response.json())
        .then(users =>this.setState({robots: users})
        );
    }

    onSearchChange =(event) =>{
        this.setState({searchfield:event.target.value})
    }

    render(){
        const filteredRobots=this.state.robots.filter(robots =>{
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        })
    return(
        <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox  searchChange={this.onSearchChange}/>
            <Cardlist robots={filteredRobots} />

        </div>
    );
}
}

export default App;