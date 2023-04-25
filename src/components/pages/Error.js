import React from 'react'
import {Link} from 'react-router-dom';
import './Error.css';
function Error() {
    return (
        <div className="error-outer">
            <div className="error-bg"></div>
            <div className="error-container">
                <div className="error-header">
                    <div>喔歐。 搜尋不到此畫面。</div>
                </div>
                <div className="error-table">
                    <h2>建議您</h2>
                    <Link to="/"><p>回到首頁</p></Link>
                    <Link to="/contact"><p>聯絡我們</p></Link>
                    <p>瞭解更多有關VED的資訊</p>
                </div>
            </div>
        </div>
    )
}

export default Error;
