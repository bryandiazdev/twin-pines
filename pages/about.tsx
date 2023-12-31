// pages/about.tsx
import Head from 'next/head';
import CompanyProfile from '../components/CompanyProfile';
import BusinessPhilosophy from '../components/BusinessPhilosophy';
import styles from './about.module.css';
import Page from '@/app/genericPage';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us | Your Company Name</title>
      </Head>
      <Page title="About Us">
      <div className={styles.pageContainer}>
        {/* Video Background */}
        <video className={styles.videoBackground} autoPlay muted loop>
          <source src='/vid.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* <h1>About Us</h1> */}

        <CompanyProfile />

        <BusinessPhilosophy />
      </div>
        </Page>
    </>
  );
};

export default About;
