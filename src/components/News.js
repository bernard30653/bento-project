import React from 'react'
import './News.css';
function News() {
    return (
        <div className="news-container">
            <table className="news-table">
                <tr>
                    <th>日期</th>
                    <th>主題</th>
                    <th>瀏覽次數</th>
                </tr>
                <tr>
                    <td>2020/09/09</td>
                    <td>2021 寒假柬埔寨夏令營志工招募辦法</td>
                    <td>500人</td>
                </tr>
             </table>   
            <iframe src="https://www.youtube.com/embed/ha-3THonlnY"></iframe>
        </div>
    )
}

export default News
