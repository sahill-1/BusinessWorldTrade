import React, { useState } from 'react';
import './Testimonial.css';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    feedback: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg',
  },
  {
    id: 3,
    name: 'Shhani',
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg',
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <div className="testimonial-container">
      {testimonials.map((testimonial, index) => (
        <div
          key={testimonial.id}
          className={`testimonial-slide ${index === activeIndex ? 'active' : index === activeIndex - 1 || (activeIndex === 0 && index === testimonials.length - 1) ? 'prev' : 'next'}`}
        >
          <img src={testimonial.image} alt="Client" className="testimonial-image" />
          <p className="testimonial-feedback">{testimonial.feedback}</p>
          <p className="testimonial-name">{testimonial.name}</p>
        </div>
      ))}
      <div className="testimonial-buttons">
        <button onClick={prevSlide} className="testimonial-button">Prev</button>
        <button onClick={nextSlide} className="testimonial-button">Next</button>
      </div>
    </div>
  );
};

export default Testimonial;