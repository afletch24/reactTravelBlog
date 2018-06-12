import React, { Component } from 'react';
import CardList from "../components/CardList";
import Header from "../components/Header";
import Search from "../components/Search";
import ErrorBoundry from "../components/ErrorBoundry";
import './App.css';
import { pics } from "../pics";


function filterItems(){}

class App extends Component {
  constructor(){
    super()
    this.state = {
      pics: pics,
    }
  }

  onSearchChange = (event) => {
    var filter = pics.filter(pic => {
      return pic.keywords.toLowerCase().includes(event.target.value.toLowerCase())
    });

    this.setState({ pics: filter})
    
  }

  render() {


    return (
      <div>
        <Header></Header> 
         <Search searchChange = {this.onSearchChange}/> 
        
        <div style={{overflowY: "scroll", height: "700px"}}>
          <ErrorBoundry>
            <CardList pics = {this.state.pics}/>  
          </ErrorBoundry>
        </div>
      </div>
    );
  }
}

export default App;
