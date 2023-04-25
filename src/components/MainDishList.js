
import React from "react";

import DishCard from "./DishCard";
import "./MainDishList.css";

const MainDishList = ({ dishesData }) => {
    return (
       
        <div className='dish_list'>
            {dishesData.map((dish, index) => {
                return (
                    <DishCard
                        key={index}
                        image={dish.image}
                        name={dish.name}
                        price={dish.price}
                    />
                );
            })}
        </div>
    );
};

export default MainDishList;