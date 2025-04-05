// import React from 'react';
// import styles from './Card.module.css';
// import { Chip } from '@mui/material';

// const Card = ({ data, type }) => {
//   const { image, title, follows, likes } = data;

//   const getCount = () => {
//     if (type === 'album') {
//       return follows;
//     } else if (type === 'song') {
//       return likes;
//     }
//     return 0;
//   };

//   const getLabel = () => {
//     if (type === 'album') {
//       return 'Follows';
//     } else if (type === 'song') {
//       return 'Likes';
//     }
//     return '';
//   };

//   return (
//     <div className={styles.card}>
//       <div className={styles.imageContainer}>
//         <img src={image} alt={title} className={styles.image} />
//         <div className={styles.chip}>
//           <Chip 
//             label={`${getCount().toLocaleString()} ${getLabel()}`} 
//             size="small" 
//             sx={{ 
//               backgroundColor: 'white', 
//               color: '#121212',
//               fontWeight: 500,
//               fontSize: '12px'
//             }} 
//           />
//         </div>
//       </div>
//       <div className={styles.title}>{title}</div>
//     </div>
//   );
// };

// export default Card;


// src/components/Card/Card.jsx
import React from 'react';
import styles from './Card.module.css';

const Card = ({ data, type }) => {
  return (
    <div className={styles.card}>
      <img src={data.image} alt={data.title || data.name} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>{data.title || data.name}</p>
        {type === 'album' && (
          <p className={styles.cardSubtitle}>{data.follows} Follows</p>
        )}
        {type === 'song' && (
          <p className={styles.cardSubtitle}>{data.likes} Likes</p>
        )}
      </div>
    </div>
  );
};

export default Card;

