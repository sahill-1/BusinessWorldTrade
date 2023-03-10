import React from 'react'
import "bootstrap";

import { FaWarehouse, FaShippingFast } from "react-icons/fa";
import {BsStarHalf, BsQuestionCircleFill} from "react-icons/bs";
import {MdOutlineSecurity} from "react-icons/md"


const ShopWithUs = () => {
  return (
    <div style={{width:"100%", border:"1px solid red", background:"#4482ef" }}>
        <p className='my-3' style={{fontWeight:"700", color:"white"}}>Why Shop With Us?</p>
        <div className='d-flex justify-content-around' style={{width:"90%", margin:"auto", border:"1px solid blue"}}>
            <div className='my-3' style={{ padding:"40px 7px",width:"230px",border:"1px solid red", background:"white", borderRadius:"10px"}}>
                <h1>
                    <BsStarHalf style={{color:"orange"}}/>
                </h1>
                <p className='my-2' style={{fontWeight:"600", fontSize:"14px"}}>QUALITY AND SAVING</p>
                <p className='mx-1' style={{fontSize:"13px", color:"#444444"}}>Comprenhensive quality control and affordable prices</p>
            </div>

            <div className='my-3' style={{ padding:"40px 7px",width:"230px",border:"1px solid red", background:"white", borderRadius:"10px"}}>
                <h1>
                    <FaWarehouse style={{color:"orange"}}/>
                </h1>
                <p className='my-2' style={{fontWeight:"600", fontSize:"14px"}}>QUALITY AND SAVING</p>
                <p className='mx-1' style={{fontSize:"13px", color:"#444444"}}>Comprenhensive quality control and affordable prices</p>
            </div>

            <div className='my-3' style={{ padding:"40px 7px",width:"230px",border:"1px solid red", background:"white", borderRadius:"10px"}}>
                <h1>
                    <FaShippingFast style={{color:"orange"}}/>
                </h1>
                <p className='my-2' style={{fontWeight:"600", fontSize:"14px"}}>QUALITY AND SAVING</p>
                <p className='mx-1' style={{fontSize:"13px", color:"#444444"}}>Comprenhensive quality control and affordable prices</p>
            </div>

            <div className='my-3' style={{ padding:"40px 7px",width:"230px",border:"1px solid red", background:"white", borderRadius:"10px"}}>
                <h1>
                    <MdOutlineSecurity style={{color:"orange"}}/>
                </h1>
                <p className='my-2' style={{fontWeight:"600", fontSize:"14px"}}>QUALITY AND SAVING</p>
                <p className='mx-1' style={{fontSize:"13px", color:"#444444"}}>Comprenhensive quality control and affordable prices</p>
            </div>

            <div className='my-3' style={{ padding:"40px 7px",width:"230px",border:"1px solid red", background:"white", borderRadius:"10px"}}>
                <h1>
                    <BsQuestionCircleFill style={{color:"orange"}}/>
                </h1>
                <p className='my-2' style={{fontWeight:"600", fontSize:"14px"}}>QUALITY AND SAVING</p>
                <p className='mx-1' style={{fontSize:"13px", color:"#444444"}}>Comprenhensive quality control and affordable prices</p>
            </div>
        </div>
    </div>
  )
}

export default ShopWithUs
