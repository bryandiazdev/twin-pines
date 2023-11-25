// components/HomeContactForm.tsx
import React from 'react';
import styles from './HomeContact.module.css';

const HomeContactForm: React.FC = () => {
  // Add your contact form logic here

  return (
    <div className={styles['home-contact-form']}>
      <h2>Contact Us</h2>
      <form style={{width: '80%'}}>
        {/* Add your form fields here */}
        <div className={styles['form-group']}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows={4} required></textarea>
        </div>
        <div className={styles['form-group']}>

        <button style={{margin: '2rem'}} type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default HomeContactForm;
