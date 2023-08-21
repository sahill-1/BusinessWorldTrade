import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../reducers/productslice";
import axios from "axios";

const ProductMenu = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [categories, setCategories] = useState([]);
  const [parentId, setParentId] = useState(""); // State variable to store parentId value
  // const dispatch = useDispatch();
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }

    setIsMenuClicked(!isMenuClicked);
  };
  const megadropstyle = { left: "280px" };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/getcategory"
        );
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const renderSubcategories = (subCategories) => {
    return subCategories
      .slice(0, 5)
      .map((subCategory) => (
        <li key={subCategory._id}> {subCategory.name} </li>
      ));
  };

  return (
    <>
      <div>
        {/* Section 2 */}
        <div></div>
        <div className="section-2 bg-light">
          <div className="cont-sec-2">
            <div className="hamburger-sec">
              <div className="hamburger">
                <div className="main-ham">
                  <nav className="ham-nav">
                    <div className="burger-menu" onClick={updateMenu}>
                      <div className={burger_class}></div>
                      <div className={burger_class}></div>
                      <div className={burger_class}></div>
                    </div>
                  </nav>
                </div>
              </div>

              <div className="hamburger-text cursor-pointer">
                <div
                  className="text-ham menu-button cursor-pointer"
                  onClick={updateMenu}
                >
                  Browse All Categories
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hamburger dropdown  */}
        <div className={menu_class}>
          <div className="hamburger-drop">
            <ul className="hamburger-items p-4">
              {categories.slice(0, 10).map((category) => (
                <li className="ham-item" key={category._id}>
                  {/* <div className="category-container"> */}
                  {/* <img
                      src={category.images[0].img}
                      alt=""
                      className="img-fluid"
                      style={{ height: "5vh", width: "10vh" }}
                    /> */}
                  <span>{category.name}</span>
                  {/* </div> */}
                  <hr className="horizontal-line" />
                  <div className="megadrop p-3" style={megadropstyle}>
                    <div className="row ham-li-row">
                      {category.children.slice(0, 9).map((subCategory) => (
                        <div
                          className="col-sm-12 col-md-4 mb-3 text-center"
                          key={subCategory._id}
                        >
                          <ul>
                            <img src={subCategory.image} alt="" />
                            <h6 className="li-item-category fs-6 fw-bold ">
                              {subCategory.name}
                            </h6>
                            <ul className="text-left fs-5">
                              {renderSubcategories(subCategory.children)}
                            </ul>
                            <li className="li-item-show-more">View more...</li>
                          </ul>
                        </div>
                      ))}
                    </div>
                    <li className="pe-0">
                      <Link to="/categories">
                        <span>VIEW All</span>{" "}
                        <h6
                          className="fa fa-chevron-circle-right"
                          aria-hidden="true"
                        ></h6>
                      </Link>
                    </li>
                  </div>
                </li>
              ))}

              <li className="ham-item">
                <Link to="/categories">
                  <span>All Categories</span>{" "}
                  <h6
                    className="fa fa-chevron-circle-right"
                    aria-hidden="true"
                  ></h6>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductMenu;
