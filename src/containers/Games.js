import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import './Games.scss';

const Games = () => {
    let uri = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=0D2DF50D571E2341FC2EFACB90C0E720&steamid=76561198057933638&format=json&include_appinfo=1"
    let proxy = "https://cors-anywhere.herokuapp.com/";
    const [games, setGames] = useState([]);
    const [hours, setHours] = useState(0);
    const [mostPlayed, setMostPlayed] = useState({});

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(proxy + uri);
            setGames(res.data.response.games);
        }
        
        fetchData();
    }, []);

    useEffect(() => {
        var biggestHours = 0;
        var totalHours = 0;
        games.forEach(game => {
            if (Number(game.playtime_forever) > biggestHours) {
                biggestHours = Number(game.playtime_forever);
                setMostPlayed(game);
            }

            totalHours = totalHours + Number(game.playtime_forever);
        });

        setHours(totalHours);
    }, [games])

    return (
        <div className="games">
            <h1>My Games</h1>
            <p className="sub-head">Welcome to my list of expansive games. You will find all of my Steam games sorted by longest played.</p>
            <hr />
            <div className="stats-row">
                <Card>
                    <h4>Total Games</h4>
                    <p>{games.length ? games.length : '...'}</p>
                </Card>
                <Card>
                    <h4>Hours Played</h4>
                    <p>{hours ? hours : '...'}</p>
                </Card>
                <Card>
                    <h4>Most Played Game</h4>
                    <p>{mostPlayed.name ? mostPlayed.name : 'None'}</p>
                </Card>
            </div>
        </div>
    )
}

export default Games;