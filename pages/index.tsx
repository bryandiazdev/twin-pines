// pages/index.tsx
import React, { useEffect, useState } from 'react';
import '../app/globals.css';
import ServicesSection from '../components/HomeServicesCarousel';
import HomeTestimonials from '../components/HomeTestimonials';
import HomeContactForm from '../components/HomeContactForm';
import styles from './index.module.css';
import Page from '../app/genericPage';
import HomeHero from '../components/HomeHero';

const Home: React.FC = () => {
  const [showHero, setShowHero] = useState(false);
  const landscapingServices = [
    // Service 1
    {
      title: 'Landscape Design 1',
      link: '/services/design',
      image: '/services1.jpg',
    },
    // Service 2
    {
      title: 'Landscape Design 2',
      link: '/services/design',
      image: '/services2.jpg',
    },
    // Service 3
    {
      title: 'Landscape Design 3',
      link: '/services/design',
      image: '/services3.jpg',
    },
    // Add more services as needed
  ];

  const installationServices = [
    // Service 1
    {
      title: 'Installation 1',
      link: '/services/installation',
      image: '/services4.jpg',
    },
    // Service 2
    {
      title: 'Installation 2',
      link: '/services/installation',
      image: '/services5.jpg',
    },
    // Service 3
    {
      title: 'Installation 3',
      link: '/services/installation',
      image: '/services6.jpg',
    },
    // Add more services as needed
  ];
  const maintenanceServices = [
    // Service 1
    {
      title: 'Maintenance 1',
      link: '/services/maintenance',
      image: '/services7.jpg',
    },
    // Service 2
    {
      title: 'Maintenance 2',
      link: '/services/maintenance',
      image: '/services8.jpg',
    },
    // Service 3
    {
      title: 'Maintenance 3',
      link: '/services/',
      image: '/services9.jpg',
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
        <div style={{marginTop: '160px'}}>
          <ServicesSection
            service="Design"
            description="Transform your outdoor space into a masterpiece with our expert landscape design services."
            services={landscapingServices}
          />
        </div>
          <ServicesSection
            service="Installation"
            description="From concept to reality, we handle installation and ensure your landscape stays beautiful year-round."
            services={installationServices}
          />
          <ServicesSection
            service="Maintenance"
            description="Celebrate the beauty of every season with our seasonal enhancements, adding color and life to your landscape."
            services={maintenanceServices}
          />
        <HomeTestimonials />
        <HomeContactForm />
      </Page>
    </>
  );
};

export default Home;
