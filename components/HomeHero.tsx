// components/Hero.tsx
import React from 'react';
import styles from './HomeHero.module.css';

const Hero: React.FC = () => {
  const handleScroll = () => {
    const section = document.getElementById('scroll-target'); // Replace 'scroll-target' with the ID of your target section
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>Twin Pines Landscaping</h1>
        <p>Transforming Outdoor Spaces with Excellence</p>
        <button onClick={handleScroll}>View our services</button>
      </div>
    </div>
  );
};

export default Hero;
