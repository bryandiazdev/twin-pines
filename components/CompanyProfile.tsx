// components/CompanyProfile.tsx
import React from 'react';
import styles from './CompanyProfile.module.css';

const CompanyProfile: React.FC = () => {
  return (
    <div className={styles.companyProfile}>
      <h2>About Us</h2>
      <p>
        Twin Pines Landscaping is a leading landscaping company dedicated to transforming outdoor spaces
        into beautiful and functional landscapes. With a team of passionate professionals, we
        deliver top-notch design, installation, and maintenance services.
      </p>
      {/* Add more content as needed */}
    </div>
  );
};

export default CompanyProfile;
