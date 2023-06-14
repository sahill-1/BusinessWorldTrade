import React from 'react';
import { useState, useEffect } from "react";
import "./Testimonial.css";
import data from "./data"


const Testimonial = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    }
  }, [index]);


  return (
    <>
      <p style={{
        color: "#444444",
        fontWeight: "500",
        fontSize: "34px",
        paddingTop: "25px"
      }}>What Our Client Say About Us</p>
      <section className='section my-2'>
        <div className='section-center'>
          {people.map((item, indexPeople) => {
            const { id, name, image, quote } = item;
            let position = "nextSlide";
            if (indexPeople === index) {
              position = "activeSlide"
            }
            if (indexPeople === index - 1 || (index === 0 && indexPeople === people.length - 1)) {
              position = "lastSlide"
            }
            return (
              <article className={position} key={id}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className='text'>{quote}</p>
              </article>
            )
          })}
          <button className='prev' onClick={() => setIndex(index - 1)}><i className='fas fa-arrow-left' /></button>
          <button className='next' onClick={() => setIndex(index + 1)}><i className='fas fa-arrow-right' /></button>
        </div>
      </section>
    </>

  )
}

export default Testimonial
