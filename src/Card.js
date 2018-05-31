import React, { Component} from 'react';
import "./Card.css";

class Card extends Component {
    render(){
        return(
        <div className="card">
            <img alt="" src={this.props.img}/>
            <p className="imgWords"> {this.props.location} </p> 
        </div>
        );
    }
};

export default Card;