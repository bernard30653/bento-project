import React from 'react'
import piggyPhoto from '../images/piggy_bank.svg';
import creditCardPhoto from '../images/credit_card.svg';
import './Donate.css';
function Donate() {
    return (
        <div className="donate-outer">
        <div className="donate-header">付款方式</div>
        <div className="donate-container">
            <div className="piggy-container">
                <img src={piggyPhoto} alt="Piggy"/>
                <button className="btn-success">小額捐款</button>
            </div>
            <div className="credit-card-container">
                <img src={creditCardPhoto} alt="Credit Card"/>
                <button className="btn-success">企業合作</button>
            </div>
        </div>
    </div>
    )
}

export default Donate;
