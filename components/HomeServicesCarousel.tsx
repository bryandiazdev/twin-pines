// components/ServicesSection.tsx
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import styles from './HomeServicesCarousel.module.css';

interface ServiceCard {
  title: string;
  link: string;
  image: string;
}

interface ServicesSectionProps {
  service: string;
  description: string;
  services: ServiceCard[];
  isFirstSection?: boolean;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ service, description, services, isFirstSection }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const section = sectionRef.current;

    if (section) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              controls.start({ opacity: 1, y: 0 });
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(section);
    }
  }, [controls]);

  return (
    <motion.div
      className={`${styles.servicesSection} ${isFirstSection ? styles.firstSection : ''}`}
      ref={sectionRef}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
    >
      <h2>{service}</h2>
      <p>{description}</p>
      <motion.div className={styles.cardContainer}>
        {services.map((serviceCard, index) => (
          <motion.div
            key={index}
            className={`${styles.card} ${styles.fadeIn}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <img src={serviceCard.image} alt={serviceCard.title} />
            <h3>{serviceCard.title}</h3>
          </motion.div>
        ))}
      </motion.div>
      <div className={styles.learnMoreButton}>
        <Link href={`/${service.toLowerCase().replace(/\s+/g, '-')}`}>
          Learn More
        </Link>
      </div>
    </motion.div>
  );
};

export default ServicesSection;
