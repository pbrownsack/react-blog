import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.scss';
import avatar from '../img/avatar.jpg';
import SocialBar from './SocialBar';

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
                <li><NavLink to="/about" activeClassName="active">About Me</NavLink></li>
                <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
                <li><NavLink to="/games" activeClassName="active">Games</NavLink></li>
            </ul>
            <SocialBar />
        </nav>
    )
}

export default SideBar;