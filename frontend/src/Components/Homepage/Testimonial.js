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
    <>
    <p style={{fontSize:"20px"}}>Testimonial</p>
    <div className="testimonial-container">
      <div className="testimonial-slide">
        <img src={testimonials[activeIndex].image} alt="Client" className="testimonial-image" />
        <p className="testimonial-feedback">{testimonials[activeIndex].feedback}</p>
        <p className="testimonial-name">{testimonials[activeIndex].name}</p>
      </div>
      <div className="testimonial-buttons">
        <button onClick={prevSlide} className="testimonial-button">Prev</button>
        <button onClick={nextSlide} className="testimonial-button">Next</button>
      </div>
    </div>
    </>
  );
};

export default Testimonial;









// import React from 'react';
// import { useState, useEffect } from "react";
// import "./Testimonial.css";
// import data from "./data";


// const Testimonial = () => {
//   const [people] = useState(data);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const lastIndex = people.length - 1;
//     if (index < 0) {
//       setIndex(lastIndex);
//     }
//     if (index > lastIndex) {
//       setIndex(0);
//     }
//   }, [index, people]);

//   useEffect(() => {
//     let slider = setInterval(() => {
//       setIndex(index + 1);
//     }, 3000);
//     return () => {
//       clearInterval(slider);
//     }
//   }, [index]);


//   return (
//     <>
//       <p style={{
//         color: "#444444",
//         fontWeight: "500",
//         fontSize: "34px",
//         paddingTop: "25px"
//       }}>What Our Client Say About Us</p>
//       <section classNameName='section '>
//         <div classNameName='section-center'>
//           {people.map((item, indexPeople) => {
//             const { id, name, image, quote } = item;
//             let position = "nextSlide";
//             if (indexPeople === index) {
//               position = "activeSlide"
//             }
//             if (indexPeople === index - 1 || (index === 0 && indexPeople === people.length - 1)) {
//               position = "lastSlide"
//             }
//             return (
//               <article classNameName={position} key={id}>
//                 <img src={image} alt={name} classNameName="person-img" />
//                 <h4>{name}</h4>
//                 <p classNameName='text'>{quote}</p>
//               </article>
//             )
//           })}
//           <button classNameName='prev' onClick={() => setIndex(index - 1)}><i classNameName='fas fa-arrow-left' /></button>
//           <button classNameName='next' onClick={() => setIndex(index + 1)}><i classNameName='fas fa-arrow-right' /></button>
//         </div>
//       </section>
//     </>

//   )
// }

// export default Testimonial// 
