import React from 'react';
import './Header.scss';

export const HeaderText = (props) => {
    return (
        <div className="header-text">
            {props.children}
        </div>
    )
}

const Header = (props) => {
    return (
        <div className="header">
            {props.children}
        </div>
    )
}

export default Header;