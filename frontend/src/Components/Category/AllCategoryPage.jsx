import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import { BsFillGridFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const AllProductsPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [currentDesign, setCurrentDesign] = useState("grid");
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [parentCategoryData, setParentCategoryData] = useState(null);

  const handleGridClick = () => {
    setCurrentDesign("grid");
  };

  const handleMenuClick = () => {
    setCurrentDesign("menu");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/getcategory/${categoryId}`
        );
        setParentCategoryData(response.data);
        console.log("categories", response.data.category);
        console.log("sub categories", response.data.subcategories);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [categoryId]);

  const handleSubcategoryClick = async (subcategoryID) => {
    setSelectedSubcategory(subcategoryID);

    try {
      // Fetch the category data
      const categoryResponse = await axios.get(
        `http://localhost:5000/api/getcategory/${subcategoryID}`
      );
      const categoryData = categoryResponse.data;

      // Log the category data
      console.log("Category Data:", categoryData);

      // Open new page with category data
      navigate(`/category/${subcategoryID}`);
    } catch (error) {
      console.log(error);
    }
  };

  if (!parentCategoryData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container-fluid p-2">
        <div className="container-fluid  w-75">
          <div className="row gap">
            <div className="col-sm-12 col-md-3 border rounded">rrrrr</div>
            <div className="col-sm-12 col-md-9">
              <div className="row border rounded p-3">
                <div className="col-sm-4 col-md-2">
                  <button
                    className="border text-center btn me-2"
                    onClick={handleGridClick}
                  >
                    <BsFillGridFill size={25} />
                  </button>
                  <button
                    className="border text-center btn"
                    onClick={handleMenuClick}
                  >
                    <GiHamburgerMenu size={25} />
                  </button>
                </div>
                <div className="col-sm-4 col-md-8 text-center">
                  3 total products
                </div>
                <div className="col-sm-4 col-md-2 align-items-right">
                  jhjjhjhhjhjhj
                </div>
              </div>
              <div className="row bg-info py-2">
                {/* Grid Design */}
                {currentDesign === "grid" && (
                  <>
                    {parentCategoryData.subcategories &&
                      parentCategoryData.subcategories.map((item) => (
                        <div
                          className="col-sm-4 col-md-4"
                          key={item._id}
                          onClick={() => handleSubcategoryClick(item._id)}
                          style={{ cursor: "pointer" }}
                        >
                          <div className="card border rounded">
                            <div className="card-body">
                              <div className="row">
                                <img
                                  className=""
                                  src={`http://localhost:5000/${item.images[0].img}`}
                                  alt={item.name}
                                />
                                <div className="bg-success">{item.name}</div>
                                <button className="btn border border-dark">
                                  Enquiry
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </>
                )}

                {/* Menu Design */}

                {currentDesign === "menu" && (
                  <div className="row ">
                    <div className="col-md-12 ">
                      <div className="card border rounded ml-3">
                        <div className="card-body ">
                          <div className=" row">
                            <div className="col-md-4 ">
                              <div className=" row">
                                <div className="col-md-2"></div>
                                <div className="col-md-8">
                                  <img className="img-fluid" src={""} alt="" />
                                </div>
                                <div className="col-md-2"></div>
                              </div>
                            </div>
                            <div className="col-md-8 text-center">
                              <div className="bg-success">ffggffgf</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Render products for the selected subcategory */}
                {currentDesign === "grid" && selectedSubcategory && (
                  <>
                    {parentCategoryData.subcategories
                      .filter((item) => item._id === selectedSubcategory)
                      .map((subcategory) => (
                        <>
                          {subcategory.products &&
                            subcategory.products.map((product) => (
                              <div
                                className="col-sm-4 col-md-4"
                                key={product._id}
                              >
                                {/* Render product */}
                              </div>
                            ))}
                        </>
                      ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProductsPage;