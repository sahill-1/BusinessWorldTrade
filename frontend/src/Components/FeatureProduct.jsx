import React from 'react'

export default function FeatureProduct(props) {
    return (
            <div className='card' style={{ border: "1px solid black", width:"80%", margin:"auto"}}>
                <img style={{ width: "100%", borderRadius: "20px" }} className='product--image' src={props.url} alt='' />
                <h2>{props.name}</h2>
                <p style={{color:"gray"}}>Sold by: xyz</p>
                <p>{props.desc}</p>
                <p>
                    <button>Get Enquiry</button>
                </p>
            </div>
    )
}
