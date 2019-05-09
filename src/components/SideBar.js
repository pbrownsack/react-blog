import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.scss';
import avatar from '../img/avatar.jpg';

const SideBar = (props) => {
    return (
        <nav className="side-nav">
            <div className="nav-info">
                <img src={avatar} />
                <h3>Parker Brown</h3>
                <p>Blogger and Computer Scientist</p>
            </div>
            <ul>
                <li><NavLink exact to="/" activeClassName="active">Blog</NavLink></li>
                <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
                <li><NavLink to="/music" activeClassName="active">Music</NavLink></li>
            </ul>
        </nav>
    )
}

export default SideBar;