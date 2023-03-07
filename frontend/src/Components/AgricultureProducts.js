import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AgricultureProduct from './AgricultureProduct';

const AgricultureProducts = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 4,
            
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const productData = [
        {
            id: 1,
            imageurl:"https://images.unsplash.com/photo-1647181506810-50da75f538ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGxpZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            name: "Product One",
            sold: "Sold by - XYZ",
            description: "Add the description about the product..."
        },
        {
            id: 2,
            imageurl:"https://images.unsplash.com/photo-1647181506810-50da75f538ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGxpZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",

            name: "Product Two",
            sold: "Sold by - XYZ",
            description: "Add the description about the product..."
        },
        {
            id: 3,
            imageurl:"https://images.unsplash.com/photo-1647181506810-50da75f538ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGxpZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",

            name: "Product Three",
            sold: "Sold by - XYZ",
            description: "Add the description about the product..."
        },
        {
            id: 4,
            imageurl:"https://images.unsplash.com/photo-1647181506810-50da75f538ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGxpZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",

            name: "Product Four",
            sold: "Sold by - XYZ",
            description: "Add the description about the product..."
        },
        {
            id: 5,
            imageurl:"https://images.unsplash.com/photo-1647181506810-50da75f538ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGxpZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",

            name: "Product FIve",
            sold: "Sold by - XYZ",
            description: "Add the description about the product..."
        },
        {
            id: 6,
            imageurl:"https://images.unsplash.com/photo-1647181506810-50da75f538ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGxpZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",

            name: "Product Six",
            sold: "Sold by - XYZ",
            description: "Add the description about the product..."
        },
        {
            id: 7,
            imageurl:"https://images.unsplash.com/photo-1647181506810-50da75f538ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGxpZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            
            name: "Product Seven",
            sold: "Sold by - XYZ",
            description: "Add the description about the product..."
        },
        {
            id: 8,
            imageurl:"https://images.unsplash.com/photo-1647181506810-50da75f538ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGxpZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            
            name: "Product Eight",
            sold: "Sold by - XYZ",
            description: "Add the description about the product..."
        }
    ]
    const product = productData.map((item) => <AgricultureProduct name={item.name} url={item.imageurl} desc={item.description} /> )
    return (
        <div>
            <h1 style={{color:"#444444", fontWeight:"700"}}>Agriculture Products</h1>
            <Carousel showDots={true} responsive={responsive}>
                {product}
            </Carousel>;
        </div>
    )
}

export default AgricultureProducts