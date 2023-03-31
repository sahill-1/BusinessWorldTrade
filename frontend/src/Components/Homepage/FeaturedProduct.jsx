import React from 'react'

export default function FeaturedProduct(props) {
  let titleOne = props.name.split(" ")
  return (
    <div className='card' style={{ borderRadius: "20px 20px 0 0", width: "80%", margin: "auto", boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" }}>
      <img style={{ width: "100%", height: "250px", borderRadius: "20px 20px 0px 0px" }} className='product--image' src={props.url} alt='' />
      <h2 style={{ fontSize: "24px" }}>{titleOne.length >= 1 ? titleOne[0] + " " + titleOne[1] + " ..." : "error"}</h2>
      <p style={{ color: "gray" }}>Sold by: xyz</p>
      <p>Add the description about the product.</p>
      <p>
        <button style={{ marginBottom: "20px", padding: "5px 10px", borderRadius: "10px", borderColor: "transparent", boxShadow: "rgb(14,81,118) 0px 10px 10px -10px", fontSize: "15px", }}>Get Enquiry</button>
      </p>
    </div>
  )
}
