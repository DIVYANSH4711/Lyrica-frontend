import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import RecommendSongs from './Recommend/RecommendSongs';

function Search() {
  const [songs, setSongs] = useState([]);
  const [displayCount, setDisplayCount] = useState(10);
  const [query, setQuery] = useState('');
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [flag, setFlag] = useState(false); // Flag to toggle search results
  const [loading, setLoading] = useState(true); // For loading state

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('https://lyrica-i45x.onrender.com/api/allSongs');
        const data = response.data.data;
        setSongs(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching songs:', error);
        setLoading(false);
      }
    };
    fetchSongs();
  }, []);

  const handleSearch = () => {
    if (query === "") {
      setFilteredSongs([]); // Clear filtered songs if query is empty
      setFlag(false); // Reset the flag to show all songs
      return;
    }
    function searchSongs(songs, query) {
      const queryWords = query.toLowerCase().split(" ");
      const results = [];

      for (let i = 0; i < songs.length; i++) {
        const songNameWords = songs[i].name.toLowerCase().split(" ");
        let matchCount = 0;

        for (let j = 0; j < queryWords.length; j++) {
          if (songNameWords.includes(queryWords[j])) {
            matchCount++;
          }
        }

        if (matchCount > 0) {
          // Add match count so we can sort later
          results.push({
            ...songs[i],
            matchCount: matchCount
          });
        }
      }

      // Sort by number of matched words (descending)
      results.sort(function (a, b) {
        return b.matchCount - a.matchCount;
      });

      // Return top 10 matches
      return results.slice(0, 10);
    }
    const filteredSongs = searchSongs(songs, query);
    setFilteredSongs(filteredSongs);
    setFlag(true); // Toggle to show filtered songs
  };

  const clearSearch = () => {
    setQuery(''); // Clear the search query
    setFlag(false); // Reset the flag to show all songs
    setDisplayCount(10); // Reset display count in case it was altered
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-full h-full bg-gray-100 border-3 border-black rounded-r-2xl">
        <div className='flex justify-between px-2 py-1 items-center w-full h-1/12 bg-black rounded-tr-xl'>
          <div className='w-1/10 h-full flex space-x-2 items-center'>
            <div className='h-1/2 aspect-square bg-red-500 rounded-full'></div>
            <div className='h-1/2 aspect-square bg-yellow-500 rounded-full'></div>
            <div className='h-1/2 aspect-square bg-green-500 rounded-full'></div>
          </div>
          <div className="w-full max-w-md h-9/10 flex items-center bg-white border border-yellow-400 rounded-full px-4 py-2 shadow-md">
            <input
              type="text"
              placeholder="Search songs..."
              className="flex-grow h-full bg-transparent text-black pl-3 font-medium placeholder-gray-400 focus:outline-none rounded-full"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="flex space-x-2 ml-2">
              <button
                className="px-4 h-8 bg-yellow-400 text-black font-bold text-sm rounded-full shadow hover:bg-yellow-500 transition duration-200 cursor-pointer"
                onClick={handleSearch}
              >
                Search
              </button>
              <button
                className="px-4 h-8 bg-gray-400 text-black font-bold text-sm rounded-full shadow hover:bg-gray-500 transition duration-200 cursor-pointer"
                onClick={clearSearch}
              >
                Clear
              </button>
            </div>
          </div>

        </div>
        <div className="p-4 h-11/12 overflow-y-auto">
          {loading ? (
            <p className="text-center text-gray-500 font-semibold">Loading songs...</p>
          ) : (
            <ul className="space-y-2">
              {flag ? (
                // Display filtered songs
                filteredSongs.slice(0, displayCount).map((song, index) => (
                  <SongItem
                    key={index}
                    index={index}
                    name={song.name}
                    year={song.year}
                    artists={song.artists}
                  />
                ))
              ) : (
                // Display all songs
                songs.slice(0, displayCount).map((song, index) => (
                  <SongItem
                    key={index}
                    index={index}
                    name={song.name}
                    year={song.year}
                    artists={song.artists}
                  />
                ))
              )}

              {displayCount < (flag ? filteredSongs.length : songs.length) && (
                <div className="mt-4 flex justify-center">
                  <button
                    className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full shadow border-2 hover:bg-yellow-500 transition duration-200 cursor-pointer"
                    onClick={() => setDisplayCount(prev => prev + 10)}
                  >
                    Load More
                  </button>
                </div>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

function SongItem({ index, name, year, artists }) {
  const Navigate = useNavigate();

  function handleClick() {
    const songData = {
      name,
      year,
      artists
    }

    localStorage.setItem('song', JSON.stringify(songData));
    Navigate(`/search/recommend/${encodeURIComponent(name)}`);
  }

  return (
    <li
      key={index}
      className="p-4 bg-gradient-to-r from-yellow-100 to-yellow-200 border border-yellow-300 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.01]"
    >
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 flex items-center justify-center bg-white border-2 border-yellow-400 rounded-full shadow-inner text-yellow-500 text-xl">
          🎵
        </div>
        <div className="flex-1">
          <div
            className="text-lg font-semibold text-zinc-800 leading-tight hover:underline cursor-pointer"
            onClick={() => handleClick()}
          >
            {name}
          </div>
          <div className="text-sm text-zinc-500 font-medium mt-1">Released: {year}</div>
        </div>
      </div>
    </li>
  );
}

export {
  SongItem,
}
export default Search;
