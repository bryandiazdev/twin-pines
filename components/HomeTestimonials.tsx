import React from 'react';
import Slider from 'react-slick';
import './HomeTestimonials.module.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    id: 1,
    content: "The team at Twin Pines Landscaping exceeded our expectations. Their attention to detail and creativity transformed our backyard into a beautiful oasis.",
    author: "John Doe, Happy Customer",
  },
  {
    id: 2,
    content: "We are incredibly pleased with the results of our landscaping project. The communication and professionalism demonstrated by Twin Pines Landscaping made the entire process seamless.",
    author: "Jane Smith, Satisfied Client",
  },
  {
    id: 3,
    content: "Twin Pines Landscaping truly understands the artistry of landscaping. The dedication and craftsmanship they put into their work make them the top choice for anyone looking to enhance their outdoor space.",
    author: "Michael Johnson, Delighted Homeowner",
  },
];

const HomeTestimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
  };

  return (
    <div style={{display: 'flex', marginTop: '20px', justifyContent: 'center', alignItems: 'center', maxWidth: '100vw', background: 'black', paddingBottom: '60px'}}>
      <section style={{maxWidth: '600px', width: '100%', display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center'}}>
        <h2 style={{textAlign: 'center', margin: '40px', color: 'white'}}>Client Testimonials</h2>
        <Slider arrows={false} {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className='testimonial'>
              <p>{testimonial.content}</p>
              <p className="author">{testimonial.author}</p>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default HomeTestimonials;
