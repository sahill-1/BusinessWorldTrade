import React from "react";

export default function AgricultureProduct(props) {
  return (
    <div
      className="card"
      style={{
        borderRadius: "20px 20px 0px 0px",
        width: "85%",
        margin: "auto",
        boxShadow:
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
      }}
    >
      <img
        style={{
          width: "80%",
          height: "220px",
          padding: "20px",
          borderRadius: "20px 20px 0px 0px",
          margin: "auto",
        }}
        className="product--image"
        src={props.url}
        alt={props.title}
      />
      <h2 style={{ fontSize: "24px", textAlign: "center" }}></h2>
      <p style={{ color: "gray", textAlign: "center" }}>Sold by: xyz</p>
      <p style={{ textAlign: "center" }}>
        Add the description about the product.
      </p>
      <p style={{ textAlign: "center" }}>
        <button
          style={{
            marginBottom: "20px",
            padding: "5px 10px",
            borderRadius: "10px",
            borderColor: "transparent",
            boxShadow: "rgb(14,81,118) 0px 10px 10px -10px",
            fontSize: "15px",
          }}
        >
          Get Enquiry
        </button>
      </p>
    </div>
  );
}
