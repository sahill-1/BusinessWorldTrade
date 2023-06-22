
import React, { useState } from 'react';
import './ProductMenu.css';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { RiArrowDropRightLine } from 'react-icons/ri';

const categories = [
  {
    id: 1,
    name: 'Health & Beauty',
    subcategories: ['Personal Care Products', 'Common Medicines & Drugs', 'Soap & HandWash','Cosmetics','Ayurvedic Medicines & Products','Pain Relief Drug & Medicines']
  },
  {
    id: 2,
    name: 'Appreal & Fashion',
    subcategories: ['Human Hair & Accessories', 'T-Shirts', 'Kurtis','Jeans','Sarees','Sporrts Shoes']
  },
  {
    id: 3,
    name: 'Agriculture',
    subcategories: ['Rice', 'Tea', 'Irrigation Systems','Organic Vegetables','Pulses','Tractor Parts']
  }
];

const ProductMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredCategoryId, setHoveredCategoryId] = useState(null);

  const handleHover = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (categoryId) => {
    setHoveredCategoryId(categoryId);
  };
  const handleMouseLeave = () => {
    setHoveredCategoryId(null);
  };

  return (
    <div className="container">
      <button className="menu-button" onMouseEnter={handleHover} >
        Browse All Categories <RiArrowDropDownLine />
      </button>

      {isMenuOpen && (
        <div className="categories-menu">
          {categories.map((category) => (
            <ul
              key={category.id}
              className={`category ${hoveredCategoryId === category.id ? 'active' : ''} subcategory-hover`}
              onMouseEnter={() => handleMouseEnter(category.id)}
              onMouseLeave={handleMouseLeave}>
              {category.name}<RiArrowDropRightLine/>
              {hoveredCategoryId === category.id && (
                <div className="subcategory" style={{padding:"5px 5px", background:"transparent", border:"none", position:"absolute", left:"98%", top:"-6px"}}>
                  {category.subcategories.map((subcategory, index) => (
                    <li key={index} className='subcategory-li-tag' style={{listStyle:"none", textAlign:'left', padding:"8px 10px", background:"white", borderRadius:"4px", marginBottom:"1px", border:"1px solid grey", fontStyle:"Gill Sans", fontSize:"14px"}}>{subcategory}</li>
                  ))}
                </div>
              )}
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};
export default ProductMenu;
