// src/components/GameList.js
import React from 'react';

const GameList = ({ games }) => {
  return (
    <div>
      <h2>Game List</h2>
      <ul>
        {games.map(game => (
          <li key={game.id}>
            <p>{game.white.username} vs {game.black.username}</p>
            <p>Status: {game.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
