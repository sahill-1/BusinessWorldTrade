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
        Main Category
        {isHovered && (
          <div className="subcategory">
            <p>Subcategory 1</p>
            <p>Subcategory 2</p>
            <p>Subcategory 3</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hover;