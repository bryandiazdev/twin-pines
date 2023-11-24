// components/ServicesSection.tsx
import React from 'react';
import styles from './ServicesSection.module.css'; // Create this CSS module

interface ServicesSectionProps {
  service: string;
  description: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ service, description }) => {
  return (
    <div className={styles.servicesSection}>
      <h2>{service}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ServicesSection;
