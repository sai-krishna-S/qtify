// // import React, { useState } from 'react';
// // import styles from './Tabs.module.css';
// // import { Tabs as MUITabs, Tab } from '@mui/material';

// // const Tabs = ({ genres, onTabChange }) => {
// //   const [value, setValue] = useState(0);

// //   const handleChange = (event, newValue) => {
// //     setValue(newValue);
// //     onTabChange(newValue === 0 ? null : genres[newValue - 1].key);
// //   };

// //   return (
// //     <div className={styles.tabsContainer}>
// //       <MUITabs
// //         value={value}
// //         onChange={handleChange}
// //         textColor="inherit"
// //         indicatorColor="primary"
// //         sx={{
// //           '& .MuiTabs-indicator': {
// //             backgroundColor: '#34C94B',
// //           },
// //           '& .MuiTab-root': {
// //             color: 'white',
// //             textTransform: 'none',
// //             fontFamily: 'Poppins, sans-serif',
// //             fontWeight: 600,
// //             '&.Mui-selected': {
// //               color: '#34C94B',
// //             },
// //           },
// //         }}
// //       >
// //         <Tab label="All" />
// //         {genres.map((genre, index) => (
// //           <Tab key={index} label={genre.label} />
// //         ))}
// //       </MUITabs>
// //     </div>
// //   );
// // };

// // export default Tabs;

// import React, { useState } from 'react';
// import styles from './Tabs.module.css';
// import { Tabs as MUITabs, Tab } from '@mui/material';

// const Tabs = ({ genres = [], onTabChange = () => {} }) => {
//   const [value, setValue] = useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//     if (genres.length > 0) {
//       onTabChange(newValue === 0 ? null : genres[newValue - 1]?.key || null);
//     }
//   };

//   return (
//     <div className={styles.tabsContainer}>
//       <MUITabs
//         value={value}
//         onChange={handleChange}
//         textColor="inherit"
//         indicatorColor="primary"
//         sx={{
//           '& .MuiTabs-indicator': {
//             backgroundColor: '#34C94B',
//           },
//           '& .MuiTab-root': {
//             color: 'white',
//             textTransform: 'none',
//             fontFamily: 'Poppins, sans-serif',
//             fontWeight: 600,
//             '&.Mui-selected': {
//               color: '#34C94B',
//             },
//           },
//         }}
//       >
//         <Tab label="All" />
//         {Array.isArray(genres) && genres.map((genre, index) => (
//           <Tab key={genre.key || index} label={genre.label} />
//         ))}
//       </MUITabs>
//     </div>
//   );
// };

// export default Tabs;

// src/components/Tabs/Tabs.jsx
import React from 'react';
import styles from './Tabs.module.css';

const Tabs = ({ tabs = [], selected, onTabChange }) => {
  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <button
          key={tab.key}
          className={`${styles.tabButton} ${selected === tab.key ? styles.active : ''}`}
          onClick={() => onTabChange(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
