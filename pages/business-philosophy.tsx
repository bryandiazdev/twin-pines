// pages/business-philosophy.tsx
import Page from '@/app/genericPage';
import Head from 'next/head';
import styles from './about.module.css';

const BusinessPhilosophy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Business Philosophy | Twin Pines Landscaping</title>
      </Head>
      <Page title="Business Philosophy">
      <div className={styles.pageContainer} style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1700744228339-03c725f5ee57?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
        <div className={styles.content}>
          <h1>Our Business Philosophy</h1>
          <p>
            At Twin Pines Landscaping, our business philosophy is centered around creating outdoor spaces that
            harmonize with nature and reflect the unique vision of each client. We believe in sustainable
            landscaping practices and a commitment to excellence in every project.
          </p>
          {/* Add more content as needed */}
        </div>
      </div>
        </Page>
    </>
  );
};

export default BusinessPhilosophy;
