import React from 'react';
import "./ProductPage.css";
import Navbar from "./Homepage/Navbar";
import Footer from "./Homepage/Footer";

const ProductPage = () => {
  return (
    <>
    <Navbar/>
    <div className="product-page">
      <div className="product-images">
        <div>
          <img className="product-image" src="https://funkylife.in/wp-content/uploads/2023/03/good-morning-image-531.jpg" alt="Product" />
        </div>
        <div className="sub-images">
          <img className="sub-image" src="https://funkylife.in/wp-content/uploads/2023/03/good-morning-image-531.jpg" alt="Sub 1" />
          <img className="sub-image" src="https://funkylife.in/wp-content/uploads/2023/03/good-morning-image-531.jpg" alt="Sub 2" />
          <img className="sub-image" src="https://funkylife.in/wp-content/uploads/2023/03/good-morning-image-531.jpg" alt="Sub 3" />
          <img className="sub-image" src="https://funkylife.in/wp-content/uploads/2023/03/good-morning-image-531.jpg" alt="Sub 4" />
        </div>
      </div>

      <div className="product-details">
        <h1 className="product-name">XYZ Smartwatch</h1>
        <h2 className="product-price">Rs.1999/-</h2>
        <p className="product-availability">In Stock</p>
        <div className="product-rating">
          <span className="rating-stars">★★★★☆</span>
          <span className="rating-score">(4.5/5)</span>
        </div>
        <p className="product-description">
          The XYZ Smartwatch is the perfect companion for your active lifestyle. With its sleek design and advanced features, this smartwatch keeps you connected and organized throughout the day...
        </p>

        <div className="key-features">
          <h3>Key Features:</h3>
          <ul>
            <li>Sleek and stylish design</li>
            <li>Vibrant OLED display for clear visibility</li>
            <li>Heart rate monitor to track your fitness levels</li>
            <li>Built-in GPS for accurate location tracking</li>
            <li>Long-lasting battery for extended usage</li>
            <li>Compatible with iOS and Android devices</li>
            <li>Water-resistant for all-day wear</li>
          </ul>
        </div>
        <div className="product-highlights">
          <h3>Product Highlights:</h3>
          <ul>
            <li>Stay connected: Receive notifications for calls, messages, and social media alerts directly on your wrist.</li>
            <li>Track your fitness: Monitor your steps, distance, calories burned, and sleep patterns to achieve your health goals.</li>
            <li>GPS tracking: Stay on track with accurate location data during outdoor activities like running or hiking.</li>
            <li>Long battery life: Enjoy up to 5 days of usage on a single charge, so you can focus on your activities without interruption.</li>
            <li>Stylish and durable: The XYZ Smartwatch is designed to complement your style and withstand daily wear and tear.</li>
            <li>Easy synchronization: Pair the watch with your smartphone to access additional features and customization options.</li>
          </ul>
        </div>

        <div className="customer-reviews">
          <h3>Customer Reviews:</h3>
          <div className="review">
            <p>"I love my XYZ Smartwatch! It's sleek, comfortable to wear, and keeps me motivated to reach my fitness goals." - Sarah</p>
          </div>
          <div className="review">
            <p>"This smartwatch has exceeded my expectations. The battery life is impressive, and the GPS tracking is very accurate." - John</p>
          </div>
          <div className="review">
            <p>"The XYZ Smartwatch looks great on my wrist. It's lightweight, and the display is crystal clear. Highly recommended!" - Emily</p>
          </div>
        </div>

        <div className="actions">
          <button className="add-to-cart">Add to Cart</button>
          <button className="buy-now">Buy Now</button>
        </div>

      </div>
    </div>
    <Footer/>
    </>
  );
}

export default ProductPage;
