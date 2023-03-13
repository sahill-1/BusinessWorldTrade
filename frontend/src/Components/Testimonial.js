import React from 'react';
import {useState, useEffect} from "react";
import "./Testimonial.css";
import "./data";

const Testimonial = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if(index < 0){
      setIndex(lastIndex);
    }
    if(index > lastIndex){
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
      <h2>Testimonial</h2>
    </>
  )
}

export default Testimonial
