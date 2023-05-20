import React from 'react';
import './TopCategories.css';

const Hover = () => {
  const categories = [
    { name: 'Category 1', image: 'category1.jpg' },
    { name: 'Category 2', image: 'category2.jpg' },
    { name: 'Category 3', image: 'category3.jpg' },
    { name: 'Category 4', image: 'category4.jpg' },
    { name: 'Category 5', image: 'category5.jpg' },
    { name: 'Category 6', image: 'category6.jpg' },
    { name: 'Category 7', image: 'category7.jpg' },
    { name: 'Category 8', image: 'category8.jpg' },
  ];

  return (
    <div className="top-categories">
      {categories.map((category, index) => (
        <div className="category" key={index}>
          <img src={category.image} alt={category.name} />
          <span className="category-name">{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Hover;