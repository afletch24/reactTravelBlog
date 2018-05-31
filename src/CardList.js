import React, { Component} from 'react';
import Card from "./Card";

import "./CardList.css";


const CardList = ({ pics }) => {
    const cardArray = pics.map((travel, i) => {
        return(
            <Card
                key={pics[i].id} 
                id={pics[i].id} 
                location = {pics[i].location} 
                img ={pics[i].img}
            />
        )
})
    return(
        <div className="cardContainer">
            {cardArray}      
        </div>
    )
    
};

export default CardList;