import React, { Component } from 'react';
import CardList from "./CardList";
import Header from "./Header";
import Scroll from "./Scroll";
import './App.css';
import { pics } from "./pics";

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header> 
      
        <Scroll>
          <CardList pics = {pics }/>  
        </Scroll>
      </div>
    );
  }
}

export default App;
