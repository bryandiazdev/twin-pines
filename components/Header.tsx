// components/Header.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';
import styles from './Header.module.css';

const HeaderContainer = styled.header`
  background: black;
  position: fixed;
  width: 100%;
  z-index: 1000;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const MenuIcon = styled.div`
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 6px 0;
  transition: 0.4s;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px; /* Adjust top position as needed */
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.7); /* Same as header background */
  }
`;

const StyledSpan = styled.span`
  padding: 15px;
  display: block;
  text-align: center;
  color: white;
`;

const Drawer = styled.div`
  display: none;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 90px;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
  }
`;

const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <HeaderContainer>
      <Container>
        <h1>
          <Link href="/">
            <Image alt="logo" height={60} src="/logo.png" />
          </Link>
        </h1>
        <Nav>
          <MenuIcon onClick={toggleDrawer}>
            <Bar />
            <Bar />
            <Bar />
          </MenuIcon>
          <Drawer style={{display: isDrawerOpen ? 'flex' : 'none'}}>
            <Link href="/">
              <StyledSpan onClick={toggleDrawer}>Home</StyledSpan>
            </Link>
            <div className={styles.dropdown}>
            <StyledSpan>Services</StyledSpan>
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
            <StyledSpan>About</StyledSpan>
            <div className={styles.dropdownContent}>
              <Link href="/business-philosophy"><span>Business Philosophy</span></Link>
              <Link href="/company-profile"><span>Company Profile</span></Link>
            </div>
          </div>
            {/* <Link href="/portfolio">
              <StyledSpan onClick={toggleDrawer}>Portfolio</StyledSpan>
            </Link>
            <Link href="/testimonials">
              <StyledSpan onClick={toggleDrawer}>Testimonials</StyledSpan>
            </Link>
            <Link href="/blog">
              <StyledSpan onClick={toggleDrawer}>Blog</StyledSpan>
            </Link>
            <Link href="/contact">
              <StyledSpan onClick={toggleDrawer}>Contact</StyledSpan>
            </Link> */}
          </Drawer>
          <Links>
            <Link href="/">
              <StyledSpan>Home</StyledSpan>
            </Link>
            <div className={styles.dropdown}>
            <StyledSpan>Services</StyledSpan>
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
            <StyledSpan>About</StyledSpan>
            <div className={styles.dropdownContent}>
              <Link href="/business-philosophy"><span>Business Philosophy</span></Link>
              <Link href="/company-profile"><span>Company Profile</span></Link>
            </div>
          </div>
            {/* <Link href="/portfolio">
              <StyledSpan>Portfolio</StyledSpan>
            </Link>
            <Link href="/testimonials">
              <StyledSpan>Testimonials</StyledSpan>
            </Link>
            <Link href="/blog">
              <StyledSpan>Blog</StyledSpan>
            </Link>
            <Link href="/contact">
              <StyledSpan>Contact</StyledSpan>
            </Link> */}
          </Links>
        </Nav>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
