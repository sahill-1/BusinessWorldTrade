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
        All Categories <RiArrowDropDownLine/>
      </button>
      {isMenuOpen && (
        <ul className="menu-list">
          <li onClick={handleMenuClick}>Category 1</li>
          <li onClick={handleMenuClick}>Category 2</li>
          <li onClick={handleMenuClick}>Category 3</li>
          <li onClick={handleMenuClick}>Category 4</li>
        </ul>
      )}
    </div>
  );
};

export default ProductMenu;