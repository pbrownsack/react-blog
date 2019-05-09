import React, { useState } from 'react';
import './NavBar.scss';

const NavBar = (props) => {
    const [searchToggle, setSearchToggle] = useState(false);

    return (
        <nav className="nav">
            <a className="nav-brand" href="#">Parker Brown</a>
            <ul className="nav-list">
                <li><a className="active" href="#">Home</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Portfolio</a></li>
            </ul>
            <div className="nav-search-container">
                <i class="fas fa-search"></i>
                <input type="text" className="nav-search" placeholder="Search..." />
            </div>
            <button className="nav-btn">Log In</button>
        </nav>
    )
}

export default NavBar;