// components/Header.tsx
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/logo.png';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    // Set showHeader to true after the component has mounted
    setShowHeader(true);
  }, []);

  return (
    <header className={`${styles.header} ${showHeader ? styles.show : ''}`}>
      <div className={styles.container}>
        <h1>
          <Link href="/">
            <Image alt="logo" width={60} height={60} src={logo} />
          </Link>
        </h1>
        <nav>
          <Link href="/">
            <span>Home</span>
          </Link>
          <div className={styles.dropdown}>
            <span>Services</span>
            <div className={styles.dropdownContent}>
              <Link href="/design">
                <span>Design</span>
              </Link>
              <Link href="/installation">
                <span>Installation</span>
              </Link>
              <Link href="/maintenance">
                <span>Maintenance</span>
              </Link>
              <Link href="/allservices">
                <span>All Services</span>
              </Link>
            </div>
          </div>
          <div className={styles.dropdown}>
            <span>About</span>
            <div className={styles.dropdownContent}>
              <Link href="/business-philosophy"><span>Business Philosophy</span></Link>
              <Link href="/company-profile"><span>Company Profile</span></Link>
            </div>
          </div>
          {/* Add other navigation links here */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
