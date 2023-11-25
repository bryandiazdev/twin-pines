// pages/services/maintenance.tsx
import React from 'react';
import Header from '../components/Header';
import Gallery from '../components/Gallery';
import '../app/globals.css';
import './design.css';
import Page from '@/app/genericPage';
const MaintenanceService: React.FC = () => {
  const maintenanceImages = [
    '/services9.jpg',
    '/services10.jpg',
    '/services11.jpg',
    '/services12.jpg',
  ];

  return (
    <div>
      <Page title='Maintenance Service'>
      <div className="service-page-container">
        <h1 className="service-page-title">Maintenance Service Gallery</h1>
        <p className="service-page-description">
          Our maintenance service ensures that landscapes stay vibrant and healthy over time.
          Explore our gallery showcasing the ongoing care and maintenance of our projects.
        </p>
        <Gallery images={maintenanceImages} />
      </div>
      </Page>
    </div>
  );
};

export default MaintenanceService;
