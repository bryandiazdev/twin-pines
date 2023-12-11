// components/BusinessPhilosophy.tsx
import React from 'react';
import styles from './BusinessPhilosophy.module.css';

const BusinessPhilosophy: React.FC = () => {
  return (
    <div className={styles.businessPhilosophy}>
      <h2>Our Business Philosophy</h2>
      <p>
      From the start of our working relationship, Twin Pines Landscaping wants to understand your landscaping goals, your likes and dislikes, and any unique requirements or situations of your project. By incorporating this information into the development of a master landscaping plan, we can assure you a unique, yet comprehensive design you will be completely satisfied with for years to come.

By communicating effectively with the client during the design phase and adhering to the master landscaping plan during all aspects of construction, we can ensure a finished project that is exactly what you, the client, is expecting.

      </p>
      {/* Add more content as needed */}
    </div>
  );
};

export default BusinessPhilosophy;
