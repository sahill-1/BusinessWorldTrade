import React from 'react'

export default function FeatureProduct() {
    return (
            <div className='card' style={{ border: "1px solid black", width:"80%", margin:"auto"}}>
                <img style={{ width: "100%", borderRadius: "20px" }} className='product--image' src='https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80' alt='' />
                <h2>Product Name</h2>
                <p>add the description to the products</p>
            </div>
    )
}
