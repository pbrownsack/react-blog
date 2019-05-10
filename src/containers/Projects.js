import React from 'react';
import Card, { CardInfo } from '../components/Card';
import './Projects.scss';
import logo from '../img/chloride_logo.png';
import git from '../img/social/Github.svg';

const linkStyles = {
    width: '48px',
    height: '48px'
}

const Projects = () => {
    return (
        <div className="projects">
            <h1 className="head">Personal Projects</h1>
            <p className="sub-head">A list of my dearest personal projects.</p>
            <hr />
            <Card>
                <img src={logo} />
                <CardInfo>
                    <h4>This website</h4>
                    <p>This website is an ongoing project created with ReactJS, Express, and SCSS.</p>
                </CardInfo>
                <a href="https://github.com/pbrownsack/react-blog" style={{marginLeft: 'auto'}}><img src={git} style={linkStyles} /></a>
            </Card>
            <Card>
                <img src={logo} />
                <CardInfo>
                    <h4>Sodium Chloride</h4>
                    <p>A gamemode made for Garry's Mod implementing advanced roleplaying features.</p>
                </CardInfo>
            </Card>
            <Card>
                <img src={logo} />
                <CardInfo>
                    <h4>Casa Cassel Arabians</h4>
                    <p>A static HTML and SCSS website built for Arabian equestrian business.</p>
                </CardInfo>
            </Card>
        </div>
    )
}

export default Projects;