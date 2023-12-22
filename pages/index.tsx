// pages/index.tsx
import React, { useEffect, useState } from 'react';
import '../app/globals.css';
import ServicesSection from '../components/HomeServicesCarousel';
import HomeTestimonials from '../components/HomeTestimonials';
import HomeContactForm from '../components/HomeContactForm';
import styles from './index.module.css';
import Page from '../app/genericPage';
import HomeHero from '../components/HomeHero';
import HomeFeaturedProjects from '@/components/HomeFeaturedProjects';

const Home: React.FC = () => {
  const [showHero, setShowHero] = useState(false);
  const landscapingServices = [
    // Service 1
    {
      title: 'Landscape Design',
      link: '/services/design',
      image: '/services1.jpg',
    },
    // Service 2
    {
      title: 'Installation',
      link: '/services/design',
      image: '/services2.JPG',
    },
    // Service 3
    {
      title: 'Maintenance',
      link: '/services/design',
      image: '/services3.jpg',
    },
    // Add more services as needed
  ];

  useEffect(() => {
    // Set showHero to true after the component has mounted
    setShowHero(true);
    // Add the 'loaded' class to the body element to trigger the fade-in effect
    document.body.classList.add('loaded');
  }, []);

  return (
    <>
      <Page title="Home">
        <HomeHero />
        <div id='scroll-target'/>
        <div style={{marginTop: '120px', marginBottom: '40px'}}>
          <ServicesSection
            service="Our process"
            description="Transform your outdoor space into a masterpiece with our expert landscaping services."
            services={landscapingServices}
          />
        </div>
        <HomeFeaturedProjects/>
        <HomeTestimonials />
        <HomeContactForm />
      </Page>
    </>
  );
};

export default Home;
