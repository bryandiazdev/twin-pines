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
            <h1 style={{color: 'white'}} className='text-white opacity-1 z-10'>Our Services</h1>
          </div>

          {/* First Services Section */}
          <div className={styles.servicesDiv}>
            <div style={{display: 'flex', borderBottom: '1px solid grey', flexFlow: 'wrap', justifyContent: 'center', marginTop: '2rem', borderTop: '1px solid grey'}}>
              <div className={styles.galleryContent}>
          <ServicesSection
            service="Landscape Design"
            description="Transform your outdoor space into a masterpiece with our expert landscape design services."
          />
          <ServicesSection
          service='Master Planning'
          description="A first rate landscaping master plan will make your finished project look the best that it can. The Twin Pines design staff will balance the project requirements with your budget to produce a master plan that will produce the best landscaping design that works in harmony with your home's architecture and setting."
          />
          <ServicesSection
            service='Ornamental Gardens'
            description='The designers at Twin Pines will add an artistic flair to your landscaping project through implementation of professionally designed ornamental gardens. By carefully combining perennials, annuals, sculpted shrubs, and other specialty ground cover materials, the ornamental gardens designed by Twin Pines will add a colorful, unique element to your landscaping project and greatly enhance the apearance and value of your home or business.'
            />

              </div>
              <div className={styles.galleryContent}>
          <InteractiveGallery />

              </div>
            </div>

          {/* Second Services Section */}
          <div style={{display: 'flex', borderBottom: '1px solid grey', flexFlow: 'wrap', justifyContent: 'center', paddingBottom: '2rem'}}>
              <div className={styles.galleryContent}>

          <InteractiveGallery2 />
                </div>
                <div className={styles.galleryContent}>
          <ServicesSection
            service="Installation"
            description="From concept to reality, we handle installation and ensure your landscape stays beautiful year-round."
          />
          <ServicesSection
            service='Retaining Walls/Stairways'
            description="The Twin Pines crew are masters at incorporating retaining walls and stairways to manage the various elevations of your property. We are experts at cutting natural stone into diverse shapes and patterns designed to custom fit your site's elevation in the areas in which steps and retaining walls will benefit the overall flow of the property. In addtion, Twin Pines can utilzie man-made materials such as bricks or timbers when appropriate."
            />
          <ServicesSection
            service='Grading/Contouring'
            description="The best time to involve the Designers at Twin Pines Landscaping in your project is before the initial site development. By allowing us to be involved during the early stages of development, we can apply our knowledge and expertise in true 'finish grading' to advise on the placement of material excavated from the home's foundation and other areas of the property to achieve better drainage, and to allow us to more cost effectively incorporate various landscaping elements. Utilizing Twin Pines in the early stages of your project will result in a more cohesive end results."
          />

                </div>
          </div>

          {/* Third Services Section */}
          <div style={{display: 'flex', borderBottom: '1px solid grey', flexFlow: 'wrap', justifyContent: 'center'}}>
              <div className={styles.galleryContent}>

          <ServicesSection
            service="Maintenance"
            description="Celebrate the beauty of every season with our seasonal enhancements, adding color and life to your landscape."
          />
          <ServicesSection
            service='Plantings'
            description='Twin Pines carefully selects trees, shrubs, and other plantings which are appropriate for your soil type and water/drainage conditions, and which are suitable for the Mid-Michigan climate. Our designers strive to select items which compliment the architecture and constuction elements of your home, while ensuring that all plantings "fit" into the overall landscape design and Master Plan.'
            />
          <ServicesSection
            service='Landscape Lighting'
            description="Outdoor lighting will do for your home at night what landscaping does during the day - make it comfortable, attractive, and enjoyable. Not only will you and your family stroll outdoors more easily in well lit safety, you'll rest comfortably in the knowledge that your well lit premises will deter intruders. A well-designed landscape lighting system compliments your landscaping investment and adds value to your property. It not only provides beautiful visual effects, it provides functional effects as well."
          />
              </div>
              <div className={styles.galleryContent}>
          <InteractiveGallery3 />

              </div>
            </div>
          {/* Interactive Gallery Section */}
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
