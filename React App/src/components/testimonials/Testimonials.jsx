import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    text: "Balancing school and work was challenging, but the flexible scheduling and supportive environment at the college made it possible. The clinical experiences were top-notch, and I feel fully prepared to enter the nursing profession. I recently passed my licensure exam and landed my dream job at a major hospita",
  },
  {
    text: "The college's entrepreneurship program gave me the tools and knowledge to start my own business. The faculty and staff were incredibly supportive, offering guidance every step of the way. I am proud to say that my startup is now thriving, and I owe a lot of my success to the college community.",
  },
  {
    text: "Thanks to the support and resources provided by the college, I was able to secure an internship at a leading tech company. The hands-on projects and mentorship opportunities were invaluable in helping me build my skills and confidence. I'm now on track to graduate with honors and have already received a job offer!.",
  },
];

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 2);

  return (
    <section className="testimonial" id="services">
      <div className="testimonial-container" id="testimonial">
        <div className="testimonial-content">
          {displayedTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="quote">“</p>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          ))}
        </div>
        {testimonials.length > 2 && (
          <button className="read-more-button" onClick={toggleShowAll}>
            {showAll ? 'Show Less' : 'Read More'}
          </button>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
