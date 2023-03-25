import React, { useState, useEffect, useRef } from 'react';

const countries = [
    { name: 'USA', time: '12:00 PM' },
    { name: 'Canada', time: '11:30 AM' },
    { name: 'Japan', time: '1:00 AM' },
    { name: 'Australia', time: '9:00 PM' },
    { name: 'India', time: '1:00 PM' },
    { name: 'Nigeria', time: '2:00 PM' },
    { name: 'South Africa', time: '12:00 PM' },
    { name: 'Wakanda', time: '1:00 PM' },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const listRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setCurrentIndex((prevIndex) =>
                prevIndex < countries.length - 1 ? prevIndex + 1 : 0
            );
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (isAnimating) {
            const timer = setTimeout(() => {
                setIsAnimating(false);
            }, 800);

            return () => clearTimeout(timer);
        }
    }, [isAnimating]);

    return (
        <div style={{width: '100%',height: '200px',overflow: 'hidden',position: 'relative',}}>
            <ul
                ref={listRef}
                style={{
                    listStyleType: 'none',
                    margin: 0,
                    padding: 0,
                    position: 'absolute',
                    top: `-${currentIndex * 50}px`,
                    transition: isAnimating ? 'top 0.5s ease-in-out' : 'none',
                }}>
                {countries.map((country, index) => (
                    <div style={{borderBottom:"1px solid grey", padding:"0px 10px"}}>
                        <li key={index} style={{ display: "flex", margin:"auto" }}>
                            <h3 style={{fontSize:"18px", fontWeight:"500", width:"30%",justifyContent:"space-between", textAlign:"center", margin:"auto"}}>{country.name}</h3>
                            <p style={{width:"300px", margin:"auto"}}>Product description is given here</p>
                            <p style={{width:"120px",marginTop:"15px"}}>{country.time}</p>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Carousel;