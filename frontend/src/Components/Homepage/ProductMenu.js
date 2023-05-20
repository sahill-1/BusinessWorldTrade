import React, { useState } from 'react';
import './ProductMenu.css';
import { RiArrowDropDownLine } from 'react-icons/ri';

const categories = [
  {
    id: 1,
    name: 'Category 111111111',
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

const ProductMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredCategoryId, setHoveredCategoryId] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  const handleMouseEnter = (categoryId) => {
    setHoveredCategoryId(categoryId);
  };
  const handleMouseLeave = () => {
    setHoveredCategoryId(null);
  };

  return (
    <div className="container">
      <button className="menu-button" onClick={toggleMenu}>
        Browse All Categories <RiArrowDropDownLine />
      </button>

      {isMenuOpen && (
        <div className="categories-menu">
          {categories.map((category) => (
            <ul
              key={category.id}
              className={`category ${hoveredCategoryId === category.id ? 'active' : ''} subcategory-hover`}
              onMouseEnter={() => handleMouseEnter(category.id)}
              onMouseLeave={handleMouseLeave}
            >
              {category.name}
              {hoveredCategoryId === category.id && (
                <div className="subcategory">
                  {category.subcategories.map((subcategory, index) => (
                    <li key={index}>{subcategory}</li>
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

// import React, { useState } from 'react';
// import './ProductMenu.css';
// import { RiArrowDropDownLine } from 'react-icons/ri';

// const ProductMenu = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//   const handleMenuClick = () => {
//     setIsMenuOpen(false);
//   };
//   return (
//     <div className="product-menu">
//       <button className="menu-button" onClick={toggleMenu}>
//         Browse All Categories <RiArrowDropDownLine/>
//       </button>
//       {isMenuOpen && (
//         <ul className="menu-list">
//           <li onClick={handleMenuClick}>Agriculture</li>
//           <li onClick={handleMenuClick}>Food & Beverages</li>
//           <li onClick={handleMenuClick}>Fashion & Apparel</li>
//           <li onClick={handleMenuClick}>Pharmaceuticals</li>
//           <li onClick={handleMenuClick}>Chemicals</li>
//           <li onClick={handleMenuClick}>Electronics</li>
//           <li onClick={handleMenuClick}>Computer Hardware & Software</li>
//           <li onClick={handleMenuClick}>Furniture</li>
//           <li onClick={handleMenuClick}>Textile & Fabrics</li>
//           <li onClick={handleMenuClick}>All Categories</li>
//         </ul>
//       )}
//     </div>
//   );
// };
// export default ProductMenu;