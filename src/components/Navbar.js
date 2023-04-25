import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';
import bento_logo from '../images/bento.png';
function Navbar() {
    const [click,setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img src={bento_logo} alt="VED Logo"/>
                         林歡歡排骨店
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click?'fas fa-times':'fas fa-bars'}/>
                    </div>
                </div>
                <ul className={click?'nav-menu active':'nav-menu'}>
                    <li className="nav-item" id="about-dropdown-item">
                        <Link to="/about" className="nav-links">
                            關於我們
                            <i className="fas fa-caret-down"></i>
                        </Link>
                        <ul className="dropdown-content">
                            <li><Link to="/origin" className="dropdown-link">林歡歡排骨起源</Link></li>
                            <li><Link to="/vision" className="dropdown-link">使命與願景</Link></li>
                            <li><Link to="/members" className="dropdown-link">成員介紹</Link></li>
                        </ul>
                    </li>

                    <li className="nav-item" id="nav-dropdown-item">
                        <Link to="/plan" className="nav-links">
                            我們的菜單
                            <i className="fas fa-caret-down"></i>
                        </Link>
                        <ul className="dropdown-content">
                            <li><Link to="/taiwan_2020" className="dropdown-link">主餐</Link></li>
                            <li><Link to="/cambodia_2019" className="dropdown-link">配餐</Link></li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <Link to="/principles" className="nav-links">
                            飲食特色
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links">
                            聯絡我們
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-links">
                            會員專區
                        </Link>
                    </li>   
                </ul>
            </nav> 
        </>
    )
}

export default Navbar;
