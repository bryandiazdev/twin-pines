// pages/services.tsx
import Head from 'next/head';
import ServicesSection from '../components/ServicesSection';
import CallToAction from '../components/CallToAction';
import InteractiveGallery from '../components/InteractiveGallery';
import styles from './services.module.css';
import Page from '@/app/genericPage';
import InteractiveGallery2 from '../components/InteractiveGallery2';
import InteractiveGallery3 from '../components/InteractiveGallery3';
import '../app/globals.css';

// pages/services.tsx
// ... (existing imports)

const Services: React.FC = () => {
  return (
    <>
      <Head>
        <title>Our Services | Twin Pines Landscaping</title>
      </Head>
      <Page title="Our Services">
        <div className={styles.pageContainer}>

          {/* New top section with background image */}
          <div className={styles.topSection}>
            <div className={styles.fadeInOverlay}></div>
            <h1 className='text-white opacity-1 z-10'>Our Services</h1>
          </div>

          {/* First Services Section */}
          <div className={styles.servicesDiv}>
          <ServicesSection
            service="Landscape Design"
            description="Transform your outdoor space into a masterpiece with our expert landscape design services."
          />
          <InteractiveGallery />

          {/* Second Services Section */}
          <ServicesSection
            service="Installation"
            description="From concept to reality, we handle installation and ensure your landscape stays beautiful year-round."
          />
          <InteractiveGallery2 />

          {/* Third Services Section */}
          <ServicesSection
            service="Maintenance"
            description="Celebrate the beauty of every season with our seasonal enhancements, adding color and life to your landscape."
          />

          {/* Interactive Gallery Section */}
          <InteractiveGallery3 />
          </div>

          {/* Call to Action Section */}
          <CallToAction />

          {/* Add more services or sections as needed */}
        </div>
      </Page>
    </>
  );
};

export default Services;
