// pages/services/installation.tsx
import React from 'react';
import Header from '../components/Header';
import Gallery from '../components/Gallery';
import '../app/globals.css';
import './design.css'
import Page from '@/app/genericPage';
const InstallationService: React.FC = () => {
  const installationImages = [
    '/services5.jpg',
    '/services6.jpg',
    '/services7.jpg',
    '/services8.jpg',
  ];

  return (
    <div>
      <Page title='Installation Service'>
      <div className="service-page-container">
        <h1 className="service-page-title">Installation Service Gallery</h1>
        <p className="service-page-description">
          Our installation service turns design concepts into reality with precision and skill.
          Explore our gallery showcasing the seamless execution of our installation projects.
        </p>
        <Gallery images={installationImages} />
      </div>
      </Page>
    </div>
  );
};

export default InstallationService;
