// import axios from 'axios';

// const BASE_URL = 'https://qtify-backend-labs.crio.do';

// export const fetchTopAlbums = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/albums/top`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching top albums:', error);
//     return [];
//   }
// };

// export const fetchNewAlbums = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/albums/new`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching new albums:', error);
//     return [];
//   }
// };

// export const fetchSongs = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/songs`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching songs:', error);
//     return [];
//   }
// };

// export const fetchGenres = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/genres`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching genres:', error);
//     return [];
//   }
// };

// src/api/api.js
import axios from 'axios';

const BASE_URL = 'https://qtify-backend-labs.crio.do';

// Fetch top albums
export const fetchTopAlbums = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/albums/top`);
    return response.data;
  } catch (error) {
    console.error('Error fetching top albums:', error);
    return [];
  }
};

// Fetch new albums
export const fetchNewAlbums = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/albums/new`);
    return response.data;
  } catch (error) {
    console.error('Error fetching new albums:', error);
    return [];
  }
};

// Fetch all songs
export const fetchSongs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/songs`);
    return response.data;
  } catch (error) {
    console.error('Error fetching songs:', error);
    return [];
  }
};

// Fetch genres
export const fetchGenres = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/genres`);
    return response.data.data; // adjust if needed based on API structure
  } catch (error) {
    console.error('Error fetching genres:', error);
    return [];
  }
};

// Fetch album data (for AlbumPage)
export const fetchAlbumData = async (albumId) => {
  try {
    const response = await axios.get(`${BASE_URL}/albums/${albumId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching album data:', error);
    return null;
  }
};
