import React, { Component } from 'react';
import CardList from "./CardList";
import Header from "./Header";
import Scroll from "./Scroll";
import './App.css';
import { pics } from "./pics";
import Search from "./Search";

class App extends Component {
  constructor(){
    super()
    this.state = {
      pics: pics,
      searchfield: ""
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    
  }

  render() {
    const filteredPics = this.state.pics.filter(pic => {
      return pic.location.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div>
        <Header></Header> 
        <Search searchChange = {this.onSearchChange}/>
        <Scroll>
          <CardList pics = {filteredPics}/>  
        </Scroll>
      </div>
    );
  }
}

export default App;
