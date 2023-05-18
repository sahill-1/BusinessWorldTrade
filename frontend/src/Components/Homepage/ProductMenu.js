import React, { useState } from 'react';
import './ProductMenu.css';
import { RiArrowDropDownLine } from 'react-icons/ri';

const ProductMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="product-menu">
      <button className="menu-button" onClick={toggleMenu}>
        Browse All Categories <RiArrowDropDownLine/>
      </button>
      {isMenuOpen && (
        <ul className="menu-list">
          <li onClick={handleMenuClick}>Agriculture</li>
          <li onClick={handleMenuClick}>Food & Beverages</li>
          <li onClick={handleMenuClick}>Fashion & Apparel</li>
          <li onClick={handleMenuClick}>Pharmaceuticals</li>
          <li onClick={handleMenuClick}>Chemicals</li>
          <li onClick={handleMenuClick}>Electronics</li>
          <li onClick={handleMenuClick}>Computer Hardware & Software</li>
          <li onClick={handleMenuClick}>Furniture</li>
          <li onClick={handleMenuClick}>Textile & Fabrics</li>
          <li onClick={handleMenuClick}>All Categories</li>
        </ul>
      )}
    </div>
  );
};

export default ProductMenu;