// import React from "react";
import React, { useState, useEffect } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";
// import { Modal, Button } from 'react-bootstrap'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

function ManageProducts() {
  // add category modal
  const [subcatopen, setsubcatopen] = React.useState(false);
  const showModal = () => {
    setsubcatopen(true);
  };

  const hideModal = () => {
    setsubcatopen(false);
  };

  //   edit category modal
  const [subcatedit, setsubcatedit] = React.useState(false);
  const showModal2 = () => {
    setsubcatedit(true);
  };

  const hideModal2 = () => {
    setsubcatedit(false);
  };

  //   const modalLoaded = () => {
  //     setTitle("Modal Ready");
  //   };
  return (
    <>
      <div className="col-12 admin-dash-cont">
        {/* Add category modal */}
        <Modal show={subcatopen} onHide={hideModal}>
          <ModalHeader closeButton>
            <ModalTitle>Add Product</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <div className="product-addform">
              <div className="p-2">
                <div>
                  <input
                    type="text"
                    className="form-control mt-2"
                    placeholder="Enter Product Name"
                    aria-label="Name"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="dropdown">
                  <select
                    className="form-select mt-2"
                    aria-label="Disabled select example"
                  >
                    <option selected="">Select Seller </option>
                    <option value="1">Raj</option>
                    <option value="2">Ravi</option>
                  </select>
                </div>
              </div>
              <div className="p-2">
                <div className="dropdown">
                  <select
                    className="form-select mt-2"
                    aria-label="Disabled select example"
                  >
                    <option selected="">Select Category </option>
                    <option value="1">Agriculture</option>
                    <option value="2">Hardware</option>
                  </select>
                </div>
                <div className="dropdown">
                  <select
                    className="form-select mt-2"
                    aria-label="Disabled select example"
                  >
                    <option selected="">Select SubCategory </option>
                    <option value="1">Vegetables</option>
                    <option value="2">Fruites</option>
                  </select>
                </div>
              </div>
              <div className="p-2">
                <div className="dropdown">
                  <select
                    className="form-select mt-2"
                    aria-label="Disabled select example"
                  >
                    <option selected="">Select Inner SubCategory</option>
                    <option value="1">Chilli</option>
                    <option value="2">Tomato</option>
                  </select>
                </div>
                <div className="dropdown">
                  <select
                    className="form-select mt-2"
                    aria-label="Disabled select example"
                  >
                    <option selected="">Select Last SubCategory</option>
                    <option value="1">Red Chilli</option>
                    <option value="2">Green Chilli</option>
                  </select>
                </div>
              </div>
              <div className="p-2">
                <div className="dropdown">
                  <select
                    className="form-select mt-2"
                    aria-label="Disabled select example"
                  >
                    <option selected="">Featured Product</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                  </select>
                </div>
                <div className="dropdown">
                  <select
                    className="form-select mt-2"
                    aria-label="Disabled select example"
                  >
                    <option selected="">Packaging Type</option>
                    <option value="1">Bag</option>
                    <option value="2">Tons</option>
                  </select>
                </div>
              </div>
              <div className="p-2">
                <div>
                  <input
                    type="text"
                    className="form-control mt-2"
                    placeholder="Enter Color"
                    aria-label="Name"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="dropdown">
                  <select
                    className="form-select mt-2"
                    aria-label="Disabled select example"
                  >
                    <option selected="">Select Country</option>
                    <option value="1">India</option>
                    <option value="2">Nepal</option>
                  </select>
                </div>
              </div>
              <div className="p-2">
                <div className="">
                  <input
                    type="file"
                    className="form-control mt-2"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="dropdown">
                  <select
                    className="form-select mt-2"
                    aria-label="Disabled select example"
                  >
                    <option selected="">Select Size</option>
                    <option value="1">India</option>
                    <option value="2">Nepal</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mb-3 mt-4">
              <label for="exampleFormControlTextarea1" className="form-label">
                Enter Product Description
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </ModalBody>
          <ModalFooter>
            <button
              style={{
                backgroundColor: "#0e5176",
                color: "white",
                padding: "5px 10px 5px 10px",
                border: "none",
                borderRadius: "4px",
              }}
              onClick={hideModal}
            >
              Cancel
            </button>
            <button
              style={{
                backgroundColor: "#0e5176",
                color: "white",
                padding: "5px 10px 5px 10px",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Save
            </button>
          </ModalFooter>
        </Modal>
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper ">
          <div className="adminSubNav">
            <h3 className="admin-nav-titlee">Manage Products</h3>
            <div className="mt-2 d-flex">
              <button
                type="button"
                className="btn btn-outline-primary mr-2"
                // className="modal-btn"
                onClick={showModal}
              >
                Add Product
                {/* <IoAdd /> */}
              </button>
            </div>
          </div>
          <hr />
          <div className="table-section">
            <div className="tablenav">
              <div className="sorting ml-2">
                <label>
                  Show{" "}
                  <select
                    name="example_length"
                    aria-controls="example"
                    className=""
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>{" "}
                  entries
                </label>
              </div>
              <div className="tableSearchbar mb-3 mr-2">
                <form className="d-flex " role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-primary" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead>
                  <tr className="text-center">
                    <th scope="col">S.No</th>
                    <th scope="col">SELLER NAME</th>
                    <th scope="col">PRODUCT NAME</th>
                    <th scope="col">PRODUCT IMAGE</th>
                    <th scope="col">SELLER PACKAGE</th>
                    <th scope="col">HOT PRODUCT</th>
                    <th scope="col">STATUS</th>
                    <th scope="col">ACTION</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="text-center">
                    <th scope="row">1</th>
                    <td>Ravi</td>
                    <td>Basmati Rice</td>
                    <td>Image</td>
                    <td>Saphire</td>
                    <td>Yes</td>
                    <td>Active</td>
                    <td>
                      <div className="buttonsEnq">
                        {/* <button
                        type="button"
                        className="btn btn-primary btn-sm p-0"
                        title="Edit"
                        onClick={showModal2}
                      > */}
                        <AiOutlineEdit
                          size={18}
                          className="btn btn-primary btn-sm me-2 p-0"
                          title="Edit"
                          onClick={showModal2}
                        />
                        {/* </button> */}

                        {/* <button
                        type="button"
                        className="btn btn-danger btn-sm p-0"
                        title="Delete"
                      > */}
                        <AiOutlineDelete
                          size={18}
                          className="btn btn-danger btn-sm p-0"
                          title="Delete"
                        />
                        {/* </button> */}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Add category modal */}
        <Modal show={subcatedit} onHide={hideModal2}>
          <ModalHeader closeButton>
            <ModalTitle>Edit Product</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <div className="product-addform">
              <div className="p-2">
                <div>
                  <input
                    type="text"
                    className="form-control mt-2"
                    placeholder="Enter Product Name"
                    aria-label="Name"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="dropdown">
                  <select
                    className="form-select mt-2"
                    aria-label="Disabled select example"
                  >
                    <option selected="">Select Seller </option>
                    <option value="1">Raj</option>
                    <option value="2">Ravi</option>
                  </select>
                </div>
              </div>
              <div className="p-2">
                <div className="dropdown">
                  <select
                    className="form-select mt-2"
                    aria-label="Disabled select example"
                  >
                    <option selected="">Select Category </option>
                    <option value="1">Agriculture</option>
                    <option value="2">Hardware</option>
                  </select>
                </div>
                <div className="dropdown">
                  <select
                    className="form-select mt-2"
                    aria-label="Disabled select example"
                  >
                    <option selected="">Select SubCategory </option>
                    <option value="1">Vegetables</option>
                    <option value="2">Fruites</option>
                  </select>
                </div>
              </div>
              <div className="p-2">
                <div className="dropdown">
                  <select
                    className="form-select mt-2"
                    aria-label="Disabled select example"
                  >
                    <option selected="">Select Inner SubCategory</option>
                    <option value="1">Chilli</option>
                    <option value="2">Tomato</option>
                  </select>
                </div>
                <div className="dropdown">
                  <select
                    className="form-select mt-2"
                    aria-label="Disabled select example"
                  >
                    <option selected="">Select Last SubCategory</option>
                    <option value="1">Red Chilli</option>
                    <option value="2">Green Chilli</option>
                  </select>
                </div>
              </div>
              <div className="p-2">
                <div className="dropdown">
                  <select
                    className="form-select mt-2"
                    aria-label="Disabled select example"
                  >
                    <option selected="">Featured Product</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                  </select>
                </div>
                <div className="dropdown">
                  <select
                    className="form-select mt-2"
                    aria-label="Disabled select example"
                  >
                    <option selected="">Packaging Type</option>
                    <option value="1">Bag</option>
                    <option value="2">Tons</option>
                  </select>
                </div>
              </div>
              <div className="p-2">
                <div>
                  <input
                    type="text"
                    className="form-control mt-2"
                    placeholder="Enter Color"
                    aria-label="Name"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="dropdown">
                  <select
                    className="form-select mt-2"
                    aria-label="Disabled select example"
                  >
                    <option selected="">Select Country</option>
                    <option value="1">India</option>
                    <option value="2">Nepal</option>
                  </select>
                </div>
              </div>
              <div className="p-2">
                <div className="">
                  <input
                    type="file"
                    className="form-control mt-2"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="dropdown">
                  <select
                    className="form-select mt-2"
                    aria-label="Disabled select example"
                  >
                    <option selected="">Select Size</option>
                    <option value="1">India</option>
                    <option value="2">Nepal</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mb-3 mt-4">
              <label for="exampleFormControlTextarea1" className="form-label">
                Enter Product Description
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </ModalBody>
          <ModalFooter>
            <button
              style={{
                backgroundColor: "#0e5176",
                color: "white",
                padding: "5px 10px 5px 10px",
                border: "none",
                borderRadius: "4px",
              }}
              onClick={hideModal2}
            >
              Cancel
            </button>
            <button
              style={{
                backgroundColor: "#0e5176",
                color: "white",
                padding: "5px 10px 5px 10px",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Save
            </button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}

export default ManageProducts;
