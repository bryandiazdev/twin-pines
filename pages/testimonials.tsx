// components/Testimonials.tsx
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section>
      <h2>What Our Clients Say</h2>
      <div>
        <img src="/public/images/testimonial1.jpg" alt="Client 1" />
        <p>
          "Twin Pines Landscaping exceeded our expectations. The team's dedication to quality and
          creativity made our backyard a true oasis."
        </p>
      </div>
      <div>
        <img src="/public/images/testimonial2.jpg" alt="Client 2" />
        <p>
          "We are delighted with the results! Twin Pines Landscaping turned our ideas into reality
          with precision and artistry."
        </p>
      </div>
      {/* Add more testimonials as needed */}
    </section>
  );
};

export default Testimonials;
