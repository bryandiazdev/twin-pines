// components/InteractiveGallery.tsx
import React from 'react';
import styles from './InteractiveGallery.module.css';
import services1 from '/images/services1.jpg';
import services2 from '/images/services2.jpg';
import Image from 'next/image';
import services3 from '/images/services3.jpg';
import services4 from '/images/services4.jpg';
import { useInView } from 'react-intersection-observer';

const images = [
  services1, // Replace with your image paths
  services2,
  services3,
  services4,
];

const InteractiveGallery: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
      });
    
      return (
        <div className={`${styles.gallery} ${inView ? styles.visible : ''}`} ref={ref}>
          <h2>Explore Our Work</h2>
          <div className={styles.imageContainer}>
            {images.map((image, index) => (
              <div key={index} className={styles.imageWrapper}>
                <Image width={300} height={400} src={image} alt={`Design Gallery Image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      );
};

export default InteractiveGallery;
