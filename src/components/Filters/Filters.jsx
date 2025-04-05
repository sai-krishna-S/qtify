// src/components/Filters/Filters.jsx
import React from 'react';
import styles from './Filters.module.css';

const Filters = ({ source = [], selected, onSelect }) => {
  return (
    <div className={styles.filters}>
      {source.map((item) => (
        <button
          key={item.key}
          className={`${styles.filterButton} ${selected === item.key ? styles.active : ''}`}
          onClick={() => onSelect(item.key)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Filters;
