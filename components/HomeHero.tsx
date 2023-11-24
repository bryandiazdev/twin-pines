// components/HomeHero.tsx
import React, { useState, useEffect } from 'react';
import styles from './HomeHero.module.css';

const imagePaths = [
  'https://images.unsplash.com/photo-1597201278257-3687be27d954?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your image paths
  'https://images.unsplash.com/photo-1549448046-b89e7214060d?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1678278689925-12d446016ace?q=80&w=2882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1592595896616-c37162298647?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhbmRzY2FwaW5nfGVufDB8fDB8fHww',
];

const HomeHero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imagePaths.length);
    }, 5000); // Switch images every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.hero}>
      <img
        src={imagePaths[currentImage]}
        alt={`Hero Image ${currentImage + 1}`}
        className={styles.fadeIn}
      />
      <div className={styles.heroContent}>
        <h2>Welcome to Twin Pines Landscaping</h2>
        <p>
          Transforming outdoor spaces into breathtaking landscapes is our passion. With a blend of
          creativity and expertise, we bring your vision to life.
        </p>
        <button>Contact Us</button>
      </div>
    </div>
  );
};

export default HomeHero;
