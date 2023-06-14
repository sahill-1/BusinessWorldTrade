import React from 'react'
import "bootstrap";

import { FaWarehouse, FaShippingFast } from "react-icons/fa";
import { BsStarHalf, BsQuestionCircleFill } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md"


const ShopWithUs = () => {
    return (
        <div style={{
            width: "100%",
            background: "#4482ef"
        }}>
            <p style={{
                fontWeight: "700",
                color: "white",
                paddingTop: "25px"
            }}>Why Shop With Us?</p>
            <div className='d-flex justify-content-around flex-wrap ' style={{ width: "90%", margin: "auto" }}>
                <div className='my-3' style={{
                    padding: "40px 7px",
                    width: "230px",
                    background: "white",
                    borderRadius: "10px"
                }}>
                    <h1>
                        <BsStarHalf style={{ color: "orange" }} />
                    </h1>
                    <p className='my-2' style={{
                        fontWeight: "700",
                        fontSize: "14px"
                    }}>QUALITY AND SAVING</p>
                    <p className='mx-1' style={{
                        fontSize: "13px",
                        color: "#444444"
                    }}>Comprenhensive quality control and affordable prices</p>
                </div>

                <div className=' my-3' style={{
                    padding: "40px 7px",
                    width: "230px",
                    background: "white",
                    borderRadius: "10px"
                }}>
                    <h1>
                        <FaWarehouse style={{ color: "orange" }} />
                    </h1>
                    <p className='my-2' style={{
                        fontWeight: "700",
                        fontSize: "14px"
                    }}>GLOBAL WAREHOUSE</p>
                    <p className='mx-1' style={{
                        fontSize: "13px",
                        color: "#444444"
                    }}>Comprenhensive quality control and affordable prices</p>
                </div>

                <div className='my-3' style={{
                    padding: "40px 7px",
                    width: "230px",
                    background: "white",
                    borderRadius: "10px"
                }}>
                    <h1>
                        <FaShippingFast style={{ color: "orange" }} />
                    </h1>
                    <p className='my-2' style={{
                        fontWeight: "700",
                        fontSize: "14px"
                    }}>FAST SHIPPING</p>
                    <p className='mx-1' style={{
                        fontSize: "13px",
                        color: "#444444"
                    }}>Comprenhensive quality control and affordable prices</p>
                </div>

                <div className='my-3' style={{
                    padding: "40px 7px",
                    width: "230px",
                    background: "white",
                    borderRadius: "10px"
                }}>
                    <h1>
                        <MdOutlineSecurity style={{ color: "orange" }} />
                    </h1>
                    <p className='my-2' style={{
                        fontWeight: "700",
                        fontSize: "14px"
                    }}>PAYMENT SECURITY</p>
                    <p className='mx-1' style={{
                        fontSize: "13px",
                        color: "#444444"
                    }}>Comprenhensive quality control and affordable prices</p>
                </div>

                <div className='my-3' style={{
                    padding: "40px 7px",
                    width: "230px",
                    background: "white",
                    borderRadius: "10px"
                }}>
                    <h1>
                        <BsQuestionCircleFill style={{ color: "orange" }} />
                    </h1>
                    <p className='my-2' style={{
                        fontWeight: "700",
                        fontSize: "14px"
                    }}>HAVE QUESTIONS?</p>
                    <p className='mx-1' style={{
                        fontSize: "13px",
                        color: "#444444"
                    }}>Comprenhensive quality control and affordable prices</p>
                </div>
            </div>
            <p className='my-2' style={{ color: "white" }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
            <p style={{
                color: "yellow",
                textShadow: "1px 1px 3px black",
                paddingBottom: "10px"
            }}>Start your order now.</p>
        </div>
    )
}

export default ShopWithUs
