import React from "react";

import "./DishCard.css";

const DishCard = ({ image, name, price }) => {
    return (
        <div className='card'>
            <div className='card_image'>
                <img src={image} alt={name} />
            </div>
            <div className='card_info'>
                <h2>{name}</h2>
                <h3>${price.toLocaleString()}</h3>
            </div>
        </div>
    );
};

export default DishCard;