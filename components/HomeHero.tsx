// components/Hero.tsx
import React from 'react';
import styles from './HomeHero.module.css';
import { useRouter } from 'next/router';

const Hero: React.FC = () => {
  const handleScroll = () => {
    const section = document.getElementById('scroll-target'); // Replace 'scroll-target' with the ID of your target section
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const router = useRouter();

  const routeToContact = () => {
    router.push('/contact')
  }


  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 style={{color: 'white'}}>Twin Pines Landscaping</h1>
        <p style={{color: 'white'}}>Transforming Outdoor Spaces with Excellence</p>
        <div style={{display: 'flex', justifyContent: 'center', width: '100vw'}}>
        <button style={{marginRight: '2rem'}} onClick={handleScroll}>View our services</button>
        <button style={{marginLeft: '2rem'}} onClick={routeToContact}>Contact us</button>

        </div>
        
      </div>
    </div>
  );
};

export default Hero;
