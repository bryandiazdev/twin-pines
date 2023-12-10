// components/HomeHero.tsx
import React from 'react';
import styles from './HomeHero.module.css';
import { useRouter } from 'next/router';

const HomeHero: React.FC = () => {
  const handleScroll = () => {
    const section = document.getElementById('scroll-target'); // Replace 'scroll-target' with the ID of your target section
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const router = useRouter();

  const routeToContact = () => {
    router.push('/contact');
  };

  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 style={{ color: 'white' }}>Twin Pines Landscaping</h1>
        <p style={{ color: 'white' }}>Transforming Outdoor Spaces with Excellence</p>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100vw', alignItems: 'center', flexDirection: 'column' }}>
          <button style={{ marginBottom: '2rem' }} onClick={handleScroll}>
            View our services
          </button>
          <div style={{ position: 'relative', cursor: 'pointer' }} onClick={handleScroll}>
            <div style={{ width: '25px', height: '25px', border: 'solid white', borderWidth: '0 3px 3px 0', display: 'inline-block', padding: '3px', transform: 'rotate(45deg)' }}></div>
          </div>
          <p style={{ marginTop: '1rem', color: 'white', cursor: 'pointer' }} onClick={handleScroll}>
            Learn More
          </p>
          <button style={{ marginLeft: '2rem' }} onClick={routeToContact}>
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
