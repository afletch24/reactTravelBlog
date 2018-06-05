import React, { Component } from 'react';
import CardList from "../components/CardList";
import Header from "../components/Header";
import Scroll from "../components/Scroll";
import Search from "../components/Search";
import ErrorBoundry from "../components/ErrorBoundry";
import './App.css';
import { pics } from "../pics";


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
      return pic.keywords.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    return (
      <div>
        {/* Future Developement: put Search inside of the Header */}
        <Header></Header> 
         <Search searchChange = {this.onSearchChange}/> 
        
        <Scroll>
          <ErrorBoundry>
            <CardList pics = {filteredPics}/>  
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
