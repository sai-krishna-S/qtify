// import React, { useEffect, useState } from 'react';
// import './App.css';
// import Navbar from './components/Navbar/Navbar';
// import Hero from './components/Hero/Hero';
// import Section from './components/Section/Section';
// import { fetchTopAlbums, fetchNewAlbums, fetchSongs, fetchGenres } from './api/api';

// function App() {
//   const [topAlbums, setTopAlbums] = useState([]);
//   const [newAlbums, setNewAlbums] = useState([]);
//   const [songs, setSongs] = useState([]);
//   const [genres, setGenres] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [topAlbumsData, newAlbumsData, songsData, genresData] = await Promise.all([
//           fetchTopAlbums(),
//           fetchNewAlbums(),
//           fetchSongs(),
//           fetchGenres()
//         ]);

//         setTopAlbums(topAlbumsData);
//         setNewAlbums(newAlbumsData);
//         setSongs(songsData);
//         setGenres(genresData);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   return (
//     <div className="App">
//       <Navbar />
//       <Hero />
//       <Section title="Top Albums" data={topAlbums} type="album" />
//       <Section title="New Albums" data={newAlbums} type="album" />
//       <Section title="Songs" data={songs} type="song" genres={genres} />
//     </div>
//   );
// }

// export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import AlbumPage from './pages/AlbumPage';
import './index.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/album/:albumId" element={<AlbumPage />} />

      </Routes>
    </Router>
  );
};

export default App;
