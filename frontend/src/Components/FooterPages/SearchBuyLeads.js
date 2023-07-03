import React from "react";
import { AiOutlineRise } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import {FaRegHandshake} from "react-icons/fa";
import { Button } from "react-bootstrap";

const SearchBuyLeads = () => {
  return (
    <>
      <div
        style={{
          width: "82%",
          borderRadius: "8px",
          margin: "auto",
          border: "2px solid grey",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <div style={{ width: "20%", border: "1px solid transparent" }}>
          <p>
            <span style={{fontWeight:"500"}}>Sell for Free </span>on India's Largest Online Marketplace
          </p>
        </div>
        <div style={{ width: "20%", border: "1px solid transparent" }}>
          <AiOutlineRise style={{fontSize:"20px"}} />
          <h5>Grow Your Business</h5>
        </div>
        <div style={{ width: "20%", border: "1px solid transparent" }}>
          <GiReceiveMoney style={{fontSize:"20px"}}/>
          <h5>Grow Your Business</h5>
        </div>
        <div style={{ width: "20%", border: "1px solid transparent" }}>
          <FaRegHandshake style={{fontSize:"20px"}}/>
          <h5>Grow Your Business</h5>
        </div>
        <div style={{ width: "20%", border: "1px solid transparent" }}>
        <Button className="my-2 " style={{width:"auto", margin:"auto"}} type="submit">Start Selling</Button>
        </div>
      </div>
    </>
  );
};

export default SearchBuyLeads;
