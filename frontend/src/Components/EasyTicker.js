import React, { useState, useEffect, useRef } from 'react';

const countries = [
    { id: "1", name: 'USA', time: '12:00 PM' },
    { id: "2", name: 'Canada', time: '11:30 AM' },
    { id: "3", name: 'Japan', time: '1:00 AM' },
    { id: "4", name: 'Australia', time: '9:00 PM' },
    { id: "5", name: 'India', time: '1:00 PM' },
    { id: "6", name: 'Nigeria', time: '2:00 PM' },
    { id: "7", name: 'South Africa', time: '12:00 PM' },
    { id: "8", name: 'South Africa', time: '12:00 PM' },
    { id: "9", name: 'Wakanda', time: '1:00 PM' },
    { id: "10", name: 'China', time: '1:00 PM' },
    { id: "11", name: 'Shri Lanka', time: '1:00 PM' },
    { id: "12", name: 'Maldives', time: '1:00 PM' },
    { id: "13", name: 'Singapore', time: '1:00 PM' },
    { id: "14", name: 'Bali', time: '1:00 PM' }
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
        <>
        <div className='Easy-Ticker'>
            <p style={{fontSize:"20px", fontWeight:"500",paddingTop:"20px"}}>Top Requirements</p>
            <div className='Easy-Ticker-Main-Div'>
            <ul
                ref={listRef}
                style={{
                    width:"100%",
                    listStyleType: 'none',
                    margin: 0,
                    padding: 0,
                    position: 'absolute',
                    top: `-${currentIndex * 50}px`,
                    transition: isAnimating ? 'top 0.5s ease-in-out' : 'none',
                }}>
                {countries.map((country, index, key) => (
                    <div style={{borderBottom: "1px solid grey", padding: "0px 10px" }}>
                        <li key={index} id={key} style={{ display: "flex" }}>
                            <h3 style={{ fontSize: "16px", fontWeight: "500", width: "25%", justifyContent: "space-between", textAlign: "center", margin: "auto" }}>{country.name}</h3>
                            <p style={{fontSize:"15px", width: "55%", margin: "auto" }}>Product description is given here</p>
                            <p style={{fontSize:"15px", width: "20%", marginTop: "15px" }}>{country.time}</p>
                        </li>
                    </div>
                ))}
            </ul>
            </div>
        </div>
        </>

    );
};

export default Carousel;