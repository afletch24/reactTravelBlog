import React, { Component} from 'react';
import { pics } from "./pics";
import "./Card.css";

class Card extends Component {
    render(){
        return(
        <div className="card">
            <img alt="image" src={this.props.img}/>
            <p className="imgWords"> {this.props.location} </p> 
        </div>
        );
    }
};

export default Card;