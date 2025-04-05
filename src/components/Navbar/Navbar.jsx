// import React from 'react';
// import styles from './Navbar.module.css';
// import Logo from '../Logo/Logo';
// import Search from '../Search/Search';
// import Button from '../Button/Button';

// const Navbar = () => {
//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.navbarContent}>
//         <Logo />
//         <Search />
//         <Button text="Give Feedback" variant="primary" onClick={() => console.log('Feedback clicked')} />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar/Navbar.jsx
import React from 'react';
import styles from './Navbar.module.css';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Button from '../Button/Button';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div className={styles.searchContainer}>
        <Search />
      </div>
      <div className={styles.feedbackContainer}>
        <Button 
          text="Give Feedback" 
          variant="primary" 
          onClick={() => alert('Feedback clicked')}
        />
      </div>
    </nav>
  );
};

export default Navbar;
