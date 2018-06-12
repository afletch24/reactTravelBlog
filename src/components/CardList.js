import React from 'react';
import Card from "./Card";

import "./CardList.css";


const CardList = ({ pics }) => {
  const content = pics.map((pic) =>
        <Card 
            key={pic.id}
            id={pic.id}
            location={pic.location}
            img={pic.img}
        />

    );
    
    return(
        <div className="cardContainer">
            {content} 
        </div>
    )
    
};

export default CardList;