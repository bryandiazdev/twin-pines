// components/HomeServicesCarousel.tsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './HomeServicesCarousel.module.css';

const servicesData = [
    {
      id: 1,
      title: 'Design',
      description: 'Transform your outdoor space with our creative designs.',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your own image
    },
    {
      id: 2,
      title: 'Installation',
      description: 'Expert installation to bring your vision to life.',
      image: 'https://images.unsplash.com/photo-1604071334368-bb3cb256180b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your own image
    },
    {
      id: 3,
      title: 'Maintenance',
      description: 'Keep your landscape pristine with our maintenance services.',
      image: 'https://images.unsplash.com/photo-1595856898575-9d187bd32fd6?q=80&w=2897&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your own image
    },
  ];

const HomeServicesCarousel: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section ref={ref} className={`${styles.homeServicesCarousel} ${inView ? styles.fadeIn : ''}`}>
      <h2>Our Services</h2>
      <Slider {...settings}>
        {servicesData.map((service) => (
          <div key={service.id} className={styles.serviceSlide}>
            <img src={service.image} alt={service.title} />
            <div className={styles.serviceInfo}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HomeServicesCarousel;
