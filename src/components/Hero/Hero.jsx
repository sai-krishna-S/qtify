// import React from 'react';
// import styles from './Hero.module.css';
// // Note: You'll need to replace with actual headphones image
// import headphones from '../../assets/headphones.png';

// const Hero = () => {
//   return (
//     <div className={styles.hero}>
//       <div className={styles.heroContent}>
//         <div className={styles.textContent}>
//           <h1>For True Music Enthusiasts</h1>
//           <p>Stream over 10 million songs in high-quality audio</p>
//         </div>
//         <div className={styles.imageContainer}>
//           <img src={headphones} alt="Headphones" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// src/components/Hero/Hero.jsx
import React from 'react';
import styles from './Hero.module.css';
import headphones from '../../assets/hero_headphones.png';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h2>Over thousands of podcast episodes</h2>
      </div>
      <div className={styles.heroImageWrapper}>
        <img src={headphones} alt="Hero Headphones" className={styles.heroImage} />
      </div>
    </section>
  );
};

export default Hero;
