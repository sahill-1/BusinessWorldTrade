import React, { useState, useEffect } from 'react'
import axios from 'axios';
import 'bootstrap'



const TopSupply = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                // handle success
                setData(response.data);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
    }, []);
    
    return (
        <>
            <div className='d-flex overflow-y-auto' style={{width: "1336px"}} >
                {
                    data.map((category) => {
                        return (

                            <div key={category.id} style={{ overflow: "hiddden" }}>
                                <div className='card mx-4' style={{ margin: "auto", border: "1px solid red" }}>
                                    <img src={category.image}
                                        style={{
                                            width: "285px", height: "250px",
                                        }} />
                                </div>


                            </div>

                        )
                    })
                }
            </div>
        </>
    )
}
export default TopSupply;