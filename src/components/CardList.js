import React from 'react';
import Card from "./Card";

import "./CardList.css";


const CardList = ({ pics }) => {
    
    return(
        <div className="cardContainer">
            {
                pics.map((travel, i) => {
                return(
                    <Card
                        key={pics[i].id} 
                        id={pics[i].id} 
                        location = {pics[i].location} 
                        img ={pics[i].img}
                    />
                )
                })
            }      
        </div>
    )
    
};

export default CardList;