import React, { useState } from 'react';
import '../App.css';

const categories = [
  {
    id: 1,
    name: 'Category 1',
    subcategories: ['Subcategory 1', 'Subcategory 2', 'Subcategory 3']
  },
  {
    id: 2,
    name: 'Category 2',
    subcategories: ['Subcategory 4', 'Subcategory 5', 'Subcategory 6']
  },
  {
    id: 3,
    name: 'Category 3',
    subcategories: ['Subcategory 7', 'Subcategory 8', 'Subcategory 9']
  }
];

const Hover = () => {
  const [hoveredCategoryId, setHoveredCategoryId] = useState(null);

  const handleMouseEnter = (categoryId) => {
    setHoveredCategoryId(categoryId);
  };

  const handleMouseLeave = () => {
    setHoveredCategoryId(null);
  };

  return (
    <div className="container">
      {categories.map((category) => (
        <div
          key={category.id}
          className={`category ${hoveredCategoryId === category.id ? 'active' : ''}`}
          onMouseEnter={() => handleMouseEnter(category.id)}
          onMouseLeave={handleMouseLeave}
        >
          {category.name}
          {hoveredCategoryId === category.id && (
            <div className="subcategory">
              {category.subcategories.map((subcategory, index) => (
                <p key={index}>{subcategory}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Hover;
