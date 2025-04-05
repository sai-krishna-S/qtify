// import React, { useState } from 'react';
// import styles from './Section.module.css';
// import Button from '../Button/Button';
// import Card from '../Card/Card';
// import Carousel from '../Carousel/Carousel';
// import Tabs from '../Tabs/Tabs';

// const Section = ({ title, data, type, genres = [] }) => {
//   const [showGrid, setShowGrid] = useState(false);
//   const [filteredGenre, setFilteredGenre] = useState(null);

//   const toggleView = () => {
//     setShowGrid(!showGrid);
//   };

//   const handleTabChange = (genreKey) => {
//     setFilteredGenre(genreKey);
//   };

//   const filteredData = filteredGenre
//     ? data.filter(item => item.genre && item.genre.key === filteredGenre)
//     : data;

//   const renderContent = () => {
//     if (type === 'song') {
//       return (
//         <>
//           <Tabs genres={genres} onTabChange={handleTabChange} />
//           <Carousel data={filteredData} type={type} />
//         </>
//       );
//     }
    
//     return showGrid ? (
//       <div className={styles.grid}>
//         {data.map((item, index) => (
//           <Card key={index} data={item} type={type} />
//         ))}
//       </div>
//     ) : (
//       <Carousel data={data} type={type} />
//     );
//   };

//   return (
//     <div className={styles.section}>
//       <div className={styles.header}>
//         <h2 className={styles.title}>{title}</h2>
//         {type !== 'song' && (
//           <Button 
//             text={showGrid ? "Collapse" : "Show All"} 
//             variant="secondary" 
//             onClick={toggleView} 
//           />
//         )}
//       </div>
//       {renderContent()}
//     </div>
//   );
// };

// export default Section;

// src/components/Section/Section.jsx
import React, { useState } from 'react';
import styles from './Section.module.css';
import Carousel from '../Carousel/Carousel';
import Card from '../Card/Card';
import Button from '../Button/Button';
import Tabs from '../Tabs/Tabs';

const Section = ({ title, data, type, filterSource, filterValue, setFilterValue }) => {
  const [showAll, setShowAll] = useState(false);

  const toggleView = () => {
    setShowAll(!showAll);
  };

  const renderContent = () => {
    if (type === 'song') {
      // For songs, we always use the carousel with tabs for filtering
      return <Carousel data={data} type={type} />;
    } else {
      // For album sections, toggle between grid view and carousel view.
      return showAll ? (
        <div className={styles.grid}>
          {data.map((item) => (
            <Card key={item.id} data={item} type={type} />
          ))}
        </div>
      ) : (
        <Carousel data={data} type={type} />
      );
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {type === 'song' ? (
          <Tabs tabs={filterSource} selected={filterValue} onTabChange={setFilterValue} />
        ) : (
          <Button text={showAll ? 'Collapse' : 'Show All'} variant="secondary" onClick={toggleView} />
        )}
      </div>
      {renderContent()}
    </div>
  );
};

export default Section;


