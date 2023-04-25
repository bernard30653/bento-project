import React, { useEffect, useState } from "react";
import axios from "axios";

import "./MainDish.css";
import mainDishesData from "./mainDishesData";
import MainDishList from "./MainDishList";
import Pagination from "./Pagination";

function MainDish(){
    const [dishesData,setDishesData] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [dishesPerPage,setDishesPerPage] = useState(9);
    
    const lastDishIndex = currentPage * dishesPerPage;
    const firstDishIndex = lastDishIndex - dishesPerPage;
    const currentDishes = mainDishesData.slice(firstDishIndex, lastDishIndex);
    return (
        <div className='dish-container'>
            <h1>可以選擇四個配餐</h1>
            <h2>下方有頁碼可以做切換</h2>
            <MainDishList dishesData={currentDishes} />

            <Pagination
                totalDishes={mainDishesData.length}
                dishesPerPage={dishesPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                
            />
        </div>
    );

}


export default MainDish;