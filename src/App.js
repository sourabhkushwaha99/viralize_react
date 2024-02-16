// src/App.js
import React, { useState, useEffect } from 'react';
import GameList from './components/GameList';
import SearchBar from './components/SearchBar';
import './App.css'; // Import CSS file

const App = () => {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = 'lip_J1Zn9riDdvCFDX2jEDQ8'; // Replace 'YOUR_API_TOKEN_HERE' with your actual API token
        const response = await fetch(`https://lichess.org/api/games/user/sourabhkush99?page=${currentPage}&max=${gamesPerPage}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [currentPage, gamesPerPage]);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset pagination when performing a new search
  };

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1>Lichess Game Browser</h1>
      <SearchBar handleSearch={handleSearch} />
      <GameList games={currentGames} />
      {/* Pagination component will be implemented later */}
    </div>
  );
};

export default App;
