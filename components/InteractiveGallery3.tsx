// components/InteractiveGallery.tsx
import React from 'react';
import styles from './InteractiveGallery.module.css';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const images = [
  '/services9.JPG', // Replace with your image paths
  '/services10.jpg',
  '/services11.jpg',
  '/services12.jpg',
];

const InteractiveGallery3: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className={`${styles.gallery} ${inView ? styles.visible : ''}`} ref={ref}>
      <h2 style={{color: 'transparent'}}>Explore Our Work</h2>
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

export default InteractiveGallery3;
