import React, { Component } from 'react';

import "./Header.css";
import Search from "./Search";

import './fonts.css';

class Header extends Component {
    render(){
        return(
        <div className="header">
        
            <h1> A&B Travels </h1>
             {/* <div className="list">
                <p> About </p>
                <p> Blog </p>
                <p> Contact </p>
            </div>  */}
             
             {/* <Search />  */}
            
        </div>
        );
    }
};

export default Header;