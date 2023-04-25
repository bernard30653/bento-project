import React from "react";

import "./Pagination.css";

const Pagination = ({
    totalDishes,
    dishesPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalDishes / dishesPerPage); i++) {
        pages.push(i);
    }
    return (
        
        <div className='pagination'>
            {pages.map((page, index) => {
                return (
                    <button key={index}
                    onClick={()=>setCurrentPage(page)}
                    className={page == currentPage ? "active":""}

                    >{page}</button>
                );
            })}
        </div>
        
    );
};

export default Pagination;