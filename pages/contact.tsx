// pages/contact.tsx
import React from 'react';
import Page from '../app/genericPage';

const Contact: React.FC = () => {
  return (
    <Page title="Contact">
      <section>
      <h2>Contact Us</h2>
      <p>
        Ready to embark on a landscaping journey? Reach out to us for inquiries or schedule a
        consultation.
      </p>
      {/* Add a contact form or contact details */}
    </section>
    </Page>
  );
};

export default Contact;
