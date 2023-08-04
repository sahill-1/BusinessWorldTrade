import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import Navbar from "./Homepage/Navbar";
import Footer from "./Homepage/Footer";
import axios from "axios";

const ProductDetails = () => {
  const [data, setData] = useState([]);
  const [mainImage, setMainImage] = useState(
    "https://funkylife.in/wp-content/uploads/2023/03/good-morning-image-531.jpg"
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/getallproducts"
        );
        setData(response.data.Allproducts);
        console.log("dil hai tumara :", response.data.Allproducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      {/* <div className="product-page my-4">
        <div className="product-images">
          <div>
            <img className="product-image" src={mainImage} alt="MainImage" />
          </div>
          <div className="sub-images">
            {data.map((product) => (
              <li key={product._id}>
                <p className="product-info">Name: {product.name}</p>
                <p className="product-info">Slug: {product.slug}</p>
                {product.countryOrigin && (
                  <p className="product-info">
                    Country Origin: {product.countryOrigin}
                  </p>
                )}
                {product.packagetype && (
                  <p className="product-info">
                    Package Type: {product.packagetype}
                  </p>
                )}
                <hr className="product-info" />
              </li>
            ))}
          </div>
        </div>
      </div> */}

      {/* bbbbbb */}
      <div className="product-page my-3">
        <div className="product-images">
          <div>
            <img
              className="product-image"
              src="https://funkylife.in/wp-content/uploads/2023/03/good-morning-image-531.jpg"
              alt="Product"
            />
          </div>
          {/* <div className="sub-images">
            <img
              className="sub-image"
              src="https://funkylife.in/wp-content/uploads/2023/03/good-morning-image-531.jpg"
              alt="Sub 1"
            />
            <img
              className="sub-image"
              src="https://funkylife.in/wp-content/uploads/2023/03/good-morning-image-531.jpg"
              alt="Sub 2"
            />
            <img
              className="sub-image"
              src="https://funkylife.in/wp-content/uploads/2023/03/good-morning-image-531.jpg"
              alt="Sub 3"
            />
            <img
              className="sub-image"
              src="https://funkylife.in/wp-content/uploads/2023/03/good-morning-image-531.jpg"
              alt="Sub 4"
            />
          </div>  */}
        </div>

        <div className="product-details">
          <h1 className="product-name">Product Image</h1>
          <h3 className="product-price">Rs.1999/-</h3>
          {/* <h3 className="product-quantity">Quantity</h3> */}

          <p className="product-description">
            The XYZ Smartwatch is the perfect companion for your active
            lifestyle. With its sleek design and advanced features, this
            smartwatch keeps you connected and organized throughout the day...
          </p>

          {/* <div className="key-features">
            <h3>Key Features:</h3>
            <ul
              style={{
                border: "1px solid transparent",
                width: "50%",
                margin: "auto",
              }}
            >
              <li>Sleek and stylish design</li>
              <li>Vibrant OLED display for clear visibility</li>
              <li>Heart rate monitor to track your fitness levels</li>
              <li>Built-in GPS for accurate location tracking</li>
              <li>Long-lasting battery for extended usage</li>
              <li>Compatible with iOS and Android devices</li>
              <li>Water-resistant for all-day wear</li>
            </ul>
          </div> */}

          <div className="">
            <h6>
              Business Type: <span className="text-secondary">Lorem Text</span>
            </h6>
            <h6>
              Category <span className="text-secondary">Lorem Text</span>
            </h6>
            <h6>
              MOQ: <span className="text-secondary">Lorem Text</span>
            </h6>
            <h6>
              Year Of Establishment{" "}
              <span className="text-secondary">Lorem Text</span>
            </h6>
            <h6>
              Location: <span className="text-secondary">Lorem Text</span>
            </h6>
          </div>

          <div className="d-flex my-3">
            <div className="w-25">
              <img
                src="https://funkylife.in/wp-content/uploads/2023/03/good-morning-image-531.jpg"
                alt=""
                style={{ width: "40%", margin: "auto" }}
              />
            </div>
            <div className="w-75">
              <h5 className="product-page-company-name">Company Name</h5>
              <h5>
                Diamond Member since <span className="text-danger">2000</span>
              </h5>
            </div>
          </div>

          <div className="actions">
            <button className="add-to-cart">Enquiry Now</button>
          </div>
        </div>
        <div
          className="my-4 product-highlights"
          style={{ width: "90%", margin: "auto", textAlign: "left" }}
        >
          <h3>Product Highlights:</h3>
          <ul>
            <li>
              Stay connected: Receive notifications for calls, messages, and
              social media alerts directly on your wrist.
            </li>
            <li>
              Track your fitness: Monitor your steps, distance, calories burned,
              and sleep patterns to achieve your health goals.
            </li>
            <li>
              GPS tracking: Stay on track with accurate location data during
              outdoor activities like running or hiking.
            </li>
            {/* <li>Long battery life: Enjoy up to 5 days of usage on a single charge, so you can focus on your activities without interruption.</li> */}
            <li>
              Stylish and durable: The XYZ Smartwatch is designed to complement
              your style and withstand daily wear and tear.
            </li>
            <li>
              Easy synchronization: Pair the watch with your smartphone to
              access additional features and customization options.
            </li>
          </ul>
        </div>

        <div
          className="customer-reviews"
          style={{ width: "90%", margin: "auto", textAlign: "left" }}
        >
          <h3 style={{ fontSize: "24px" }}>Customer Reviews:</h3>
          <div className="review">
            <p>
              "I love my XYZ Smartwatch! It's sleek, comfortable to wear, and
              keeps me motivated to reach my fitness goals." - Sarah
            </p>
          </div>
          <div className="review">
            <p>
              "This smartwatch has exceeded my expectations. The battery life is
              impressive, and the GPS tracking is very accurate." - John
            </p>
          </div>
          <div className="review">
            <p>
              "The XYZ Smartwatch looks great on my wrist. It's lightweight, and
              the display is crystal clear. Highly recommended!" - Emily
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
