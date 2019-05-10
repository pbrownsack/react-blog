import React from 'react';
import './SocialBar.scss';
import fb from '../img/social/Facebook.svg';
import insta from '../img/social/Instagram.svg';
import git from '../img/social/Github.svg';
import youtube from '../img/social/YouTube.svg';

const SocialBar = () => {
    return (
        <div className="social">
            <a href="https://www.facebook.com/parker.brown.906"><img className="social-icon" src={fb} /></a>
            <a href="https://www.instagram.com/pbrownsack/"><img className="social-icon" src={insta} /></a>
            <a href="https://github.com/pbrownsack"><img className="social-icon" src={git} /></a>
            <a href="https://www.youtube.com/channel/UCvX4BN_irZy5mKtIMBjfX4w"><img className="social-icon" src={youtube} /></a>
        </div>
    )
}

export default SocialBar;