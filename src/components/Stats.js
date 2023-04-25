import React from 'react';
import './Stats.css';
function Stats() {
    return (
        <div className="stats-outer">
            <div className="stats-container">
                <div className="service-area">
                    <div>2</div>
                    <div>服務地區</div>
                </div>
                <div className="service-school">
                    <div>2</div>
                    <div>服務學校</div>
                </div>
                <div className="VED-volunteer">
                    <div>30+</div>
                    <div>VED 志工</div>
                </div>
                <div className="service-child">
                    <div>500+</div>
                    <div>服務學童</div>
                </div>
            </div>
        </div>
    )
}

export default Stats;
