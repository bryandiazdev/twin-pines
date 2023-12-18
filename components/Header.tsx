// components/Header.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.Container}>
        <h1>
          <Link href="/">
            <Image alt="logo" height={60} src="/logo.png" />
          </Link>
        </h1>
        <div className={styles.Nav}>
          <div className={styles.MenuIcon} onClick={toggleDrawer}>
            <div className={styles.Bar} />
            <div className={styles.Bar} />
            <div className={styles.Bar} />
          </div>
          <div className={styles.Drawer} style={{display: isDrawerOpen ? 'flex' : 'none'}}>
            <Link href="/">
              <span className={styles.StyledSpan} onClick={toggleDrawer}>Home</span>
            </Link>
            <div className={styles.dropdown}>
            <span className={styles.StyledSpan}>Services</span>
            <div className={styles.dropdownContent}>
              <Link href="/services">
                <span>Design</span>
              </Link>
              <Link href="/services">
                <span>Installation</span>
              </Link>
              <Link href="/services">
                <span>Maintenance</span>
              </Link>
              <Link href="/services">
                <span>All Services</span>
              </Link>
            </div>
          </div>
          <div className={styles.dropdown}>
            <span className={styles.StyledSpan}>About</span>
            <div className={styles.dropdownContent}>
              <Link href="/company-profile"><span>Business Philosophy</span></Link>
              <Link href="/company-profile"><span>Company Profile</span></Link>
            </div>
          </div>
            {/* <Link href="/portfolio">
              <span className={styles.StyledSpan} onClick={toggleDrawer}>Portfolio</span>
            </Link>
            <Link href="/testimonials">
              <span className={styles.StyledSpan} onClick={toggleDrawer}>Testimonials</span>
            </Link>
            <Link href="/blog">
              <span className={styles.StyledSpan} onClick={toggleDrawer}>Blog</span>
            </Link>
            <Link href="/contact">
              <span className={styles.StyledSpan} onClick={toggleDrawer}>Contact</span>
            </Link> */}
          </div>
          <div className={styles.Links}>
            <Link href="/">
              <span className={styles.StyledSpan}>Home</span>
            </Link>
            <div className={styles.dropdown}>
            <span className={styles.StyledSpan}>Services</span>
            <div className={styles.dropdownContent}>
              <Link href="/services">
                <span>Design</span>
              </Link>
              <Link href="/services">
                <span>Installation</span>
              </Link>
              <Link href="/services">
                <span>Maintenance</span>
              </Link>
              <Link href="/services">
                <span>All Services</span>
              </Link>
            </div>
          </div>
          <div className={styles.dropdown}>
            <span className={styles.StyledSpan}>About</span>
            <div className={styles.dropdownContent}>
              <Link href="/company-profile"><span>Business Philosophy</span></Link>
              <Link href="/company-profile"><span>Company Profile</span></Link>
            </div>
          </div>
            {/* <Link href="/portfolio">
              <span className={styles.StyledSpan}>Portfolio</span>
            </Link>
            <Link href="/testimonials">
              <span className={styles.StyledSpan}>Testimonials</span>
            </Link>
            <Link href="/blog">
              <span className={styles.StyledSpan}>Blog</span>
            </Link>
            <Link href="/contact">
              <span className={styles.StyledSpan}>Contact</span>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
