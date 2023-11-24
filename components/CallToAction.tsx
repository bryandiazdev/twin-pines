// components/CallToAction.tsx
import React from 'react';
import styles from './CallToAction.module.css';

const CallToAction: React.FC = () => {
  return (
    <div className={styles.callToAction}>
      <h2>Ready to Transform Your Outdoor Space?</h2>
      <button>Contact Us</button>
    </div>
  );
};

export default CallToAction;
