// components/HomeTestimonials.tsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './HomeTestimonials.module.css';

const testimonialsData = [
    {
      id: 1,
      name: 'John Doe',
      quote: 'Twin Pines Landscaping exceeded my expectations. The team was professional and the results were stunning.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      quote: 'I highly recommend Twin Pines for their exceptional service and attention to detail. A pleasure to work with!',
    },
  ];

const HomeTestimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section ref={ref} className={`${styles.homeTestimonials} ${inView ? styles.fadeIn : ''}`}>
      <h2>What Our Clients Say</h2>
      <div className={styles.testimonialList}>
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonial}>
            <p>{testimonial.quote}</p>
            <p className={styles.testimonialAuthor}>- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeTestimonials;