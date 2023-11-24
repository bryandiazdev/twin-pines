// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="https://www.facebook.com/TwinPinesLandscapingInc/" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://maps.app.goo.gl/dM2wFFWNxHtKynau9" target="_blank" rel="noopener noreferrer">
                Google
              </a>
            </li>
            <li>
              <a href="https://www.houzz.com/pro/webuser-11241136" target="_blank" rel="noopener noreferrer">
                Houzz
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} Twin Pines Landscaping</p>
          <p>Contact us - Office 248-524-3244 Fax 248-524-3244</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
