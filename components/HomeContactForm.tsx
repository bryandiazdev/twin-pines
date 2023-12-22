// components/ContactSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  return (
    <section className="contact-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="form-container"
        >
          <h2>Get in Touch</h2>
          <form>
            <label>
              Your Name:
              <input type="text" />
            </label>
            <label>
              Your Email:
              <input type="email" />
            </label>
            <label>
              Message:
              <textarea rows={5}></textarea>
            </label>
            <button type="submit">Contact</button>
          </form>
        </motion.div>
    </section>
  );
};

export default ContactSection;
