// src/pages/AlbumPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './AlbumPage.module.css';
import { fetchAlbumData } from '../api/api';
import Card from '../components/Card/Card';

const AlbumPage = () => {
  const { albumId } = useParams();
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const getAlbum = async () => {
      const data = await fetchAlbumData(albumId);
      setAlbum(data);
    };

    getAlbum();
  }, [albumId]);

  if (!album) {
    return <div className={styles.loading}>Loading album details...</div>;
  }

  return (
    <div className={styles.albumPage}>
      <div className={styles.albumHeader}>
        <img
          src={album.image}
          alt={album.title}
          className={styles.albumCover}
        />
        <div className={styles.albumInfo}>
          <h1 className={styles.albumTitle}>{album.title}</h1>
          <p className={styles.albumDescription}>{album.description}</p>
          <div className={styles.albumMeta}>
            <span>{album.follows} Follows</span>
            <span>{album.songs.length} Songs</span>
          </div>
        </div>
      </div>
      <div className={styles.songsSection}>
        <h2>Songs</h2>
        <div className={styles.songList}>
          {album.songs.map((song, index) => (
            <Card key={song.id || index} data={song} type="song" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;
