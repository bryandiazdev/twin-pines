// pages/company-profile.tsx
import Page from '@/app/genericPage';
import Head from 'next/head';
import styles from './about.module.css';

const CompanyProfile: React.FC = () => {
  return (
    <>
      <Head>
        <title>Company Profile | Twin Pines Landscaping</title>
      </Head>
      <Page title="Company Profile">
      <div className={styles.pageContainer} style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1532302780319-95689ab9d79a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
        <div className={styles.content}>
          <h1>Our Company Profile</h1>
          <p>
            Twin Pines Landscaping is a leading landscaping company dedicated to delivering innovative and
            high-quality outdoor solutions. With a team of skilled professionals, we've built a reputation for
            excellence in design, installation, and maintenance of landscapes that stand the test of time.
          </p>
          {/* Add more content as needed */}
        </div>
      </div>
      </Page>
    </>
  );
};

export default CompanyProfile;
