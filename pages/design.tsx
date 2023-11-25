// pages/services/design.tsx
import React from 'react';
import Header from '../components/Header';
import Gallery from '../components/Gallery';
import './design.css';
import '@/app/globals.css';
import Page from '@/app/genericPage';

const DesignService: React.FC = () => {
  const designImages = [
    '/services1.jpg',
    '/services2.jpg',
    '/services3.jpg',
    '/services4.jpg',
  ];

  return (
    <div>
      <Page title='Design Service'>
      <div className="service-page-container">
        <h1 className="service-page-title">Design Service Gallery</h1>
        <p className="service-page-description">
          Our design service brings landscapes to life with meticulous planning and creative vision.
          Explore our gallery showcasing some of our best design projects.
        </p>
        <Gallery images={designImages} />
      </div>
      </Page>
    </div>
  );
};

export default DesignService;
