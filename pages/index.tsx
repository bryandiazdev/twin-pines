// pages/index.tsx
import React, { useEffect, useState } from 'react';
import '../app/globals.css';
import HomeServicesCarousel from '../components/HomeServicesCarousel';
import HomeTestimonials from '../components/HomeTestimonials';
import HomeContactForm from '../components/HomeContactForm';
import styles from './index.module.css';
import Page from '../app/genericPage';
import HomeHero from '../components/HomeHero';

const Home: React.FC = () => {
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    // Set showHero to true after the component has mounted
    setShowHero(true);
    // Add the 'loaded' class to the body element to trigger the fade-in effect
    document.body.classList.add('loaded');
  }, []);

  return (
    <>
    <Page title="Home">
      <HomeHero/>
      <HomeServicesCarousel />
      <HomeTestimonials />
      <HomeContactForm />
      </Page>
    </>
  );
};

export default Home;
