import React, { useState } from 'react';

const Hover = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="container">
      <div
        className={`category ${isHovered ? 'active' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Agriculture
        {isHovered && (
          <div className="subcategory">
            <p>Rice</p>
            <p>Cereals</p>
            <p>Vegetables</p>
            <p>Fruits</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hover;