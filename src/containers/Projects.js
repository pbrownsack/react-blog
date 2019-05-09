import React from 'react';
import Header, { HeaderText } from '../components/Header';
import Card, { CardInfo } from '../components/Card';
import './Projects.scss';
import logo from '../img/chloride_logo.png';

const Projects = () => {
    return (
        <div className="projects">
            <Header>
                <i class="fas fa-book"></i>
                <HeaderText>
                    <h1>My personal projects, showcased for you.</h1>
                    <p>All of my personal projects including code, music, and other cool stuff will be here.</p>
                </HeaderText>
            </Header>
            <hr />
            <Card>
                <img src={logo} />
                <CardInfo>
                    <h4>This website</h4>
                    <p>This website is an ongoing project created with ReactJS, Express, and SCSS.</p>
                </CardInfo>
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