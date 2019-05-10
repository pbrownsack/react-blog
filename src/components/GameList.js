import React from 'react';
import './GameList.scss';

const GameList = ({ games }) => {
    const gameCards = games.map(game => {
        return <h1>{game.name}</h1>
    })

    return (
        <div className="game-list">
            {gameCards}
        </div>
    )
}

export default GameList;