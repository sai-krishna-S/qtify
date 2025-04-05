// src/pages/HomePage.jsx
import React, { useEffect, useState } from 'react';
import './HomePage.css';
import Hero from '../components/Hero/Hero';
import Section from '../components/Section/Section';
import { fetchTopAlbums, fetchNewAlbums, fetchSongs, fetchGenres } from '../api/api';

const HomePage = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('all');

  useEffect(() => {
    const getData = async () => {
      const top = await fetchTopAlbums();
      const newly = await fetchNewAlbums();
      const allSongs = await fetchSongs();
      const genreList = await fetchGenres();

      setTopAlbums(top);
      setNewAlbums(newly);
      setSongs(allSongs);
      setFilteredSongs(allSongs);
      setGenres([{ key: 'all', label: 'All' }, ...genreList]);
    };
    getData();
  }, []);

  useEffect(() => {
    if (selectedGenre === 'all') {
      setFilteredSongs(songs);
    } else {
      setFilteredSongs(songs.filter(song => song.genre.key === selectedGenre));
    }
  }, [selectedGenre, songs]);

  return (
    <div className="homepage">
      <Hero />
      <Section title="Top Albums" data={topAlbums} type="album" />
      <Section title="New Albums" data={newAlbums} type="album" />
      <Section
        title="Songs"
        data={filteredSongs}
        type="song"
        filterSource={genres}
        filterValue={selectedGenre}
        setFilterValue={setSelectedGenre}
      />
    </div>
  );
};

export default HomePage;
