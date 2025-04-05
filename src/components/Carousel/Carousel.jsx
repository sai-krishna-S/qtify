// import React from 'react';
// import styles from './Carousel.module.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import Card from '../Card/Card';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// // Import custom navigation images
// import leftNavigation from '../../assets/leftNavigation.svg';
// import rightNavigation from '../../assets/rightNavigation.svg';

// const Carousel = ({ data, type }) => {
//   const getSlidesPerView = () => {
//     if (window.innerWidth < 480) {
//       return 2;
//     } else if (window.innerWidth < 768) {
//       return 3;
//     } else if (window.innerWidth < 1024) {
//       return 4;
//     } else {
//       return 6;
//     }
//   };

//   return (
//     <div className={styles.carouselContainer}>
//       <Swiper
//         modules={[Navigation]}
//         navigation={{
//           prevEl: '.swiper-button-prev',
//           nextEl: '.swiper-button-next',
//         }}
//         spaceBetween={20}
//         slidesPerView={getSlidesPerView()}
//         onSlideChange={() => console.log('slide change')}
//         onSwiper={(swiper) => console.log(swiper)}
//         className={styles.swiper}
//       >
//         {data.map((item, index) => (
//           <SwiperSlide key={index} className={styles.swiperSlide}>
//             <Card data={item} type={type} />
//           </SwiperSlide>
//         ))}
//         <div className={`swiper-button-prev ${styles.navButton} ${styles.prevButton}`}>
//           <img src={leftNavigation} alt="Previous" />
//         </div>
//         <div className={`swiper-button-next ${styles.navButton} ${styles.nextButton}`}>
//           <img src={rightNavigation} alt="Next" />
//         </div>
//       </Swiper>
//     </div>
//   );
// };

// export default Carousel;

// src/components/Carousel/Carousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Carousel.module.css';
import Card from '../Card/Card';
import leftNav from '../../assets/left-nav.svg';
import rightNav from '../../assets/right-nav.svg';

const Carousel = ({ data, type }) => {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: `.${styles.prevButton}`,
          nextEl: `.${styles.nextButton}`,
        }}
        spaceBetween={16}
        slidesPerView={6}
        slidesPerGroup={1} // Global setting
        breakpoints={{
          0: { slidesPerView: 2, slidesPerGroup: 1 },
          480: { slidesPerView: 3, slidesPerGroup: 1 },
          768: { slidesPerView: 4, slidesPerGroup: 1 },
          1024: { slidesPerView: 6, slidesPerGroup: 1 },
        }}
      >
        {data.map(item => (
          <SwiperSlide key={item.id}>
            <Card data={item} type={type} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`${styles.navButton} ${styles.prevButton}`}>
        <img src={leftNav} alt="Previous" />
      </div>
      <div className={`${styles.navButton} ${styles.nextButton}`}>
        <img src={rightNav} alt="Next" />
      </div>
    </div>
  );
};

export default Carousel;
