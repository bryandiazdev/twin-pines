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
    <>
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 style={{color: 'white'}}>Twin Pines Landscaping</h1>
        <p style={{color: 'white'}}>Transforming Outdoor Spaces with Excellence</p>
        <div style={{display: 'flex', justifyContent: 'center', width: '100vw'}}>
        <button style={{marginRight: '1rem'}} onClick={handleScroll}>View our services</button>
        <button style={{marginLeft: '1rem'}} onClick={routeToContact}>Contact us</button>

        </div>
        
      </div>
    </div>
    <div style={{height: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', padding: '4rem', background: 'white'}}>
      <p>Twin Pines Landscaping is a landscape design, installation, and maintenance company specializing in large scale residential outdoor living projects. Designing and transforming your dream outdoor living space requires careful planning, collaboration, and expertise. Our streamlined step-by-step process ensures a smooth experience for our clients. Whether you have an existing concept or would like our professional recommendation, you can count on us to bring your design ideas to life.</p>
      <button onClick={routeToContact}>Contact Us</button>
    </div>
    </>
  );
};

export default Hero;
