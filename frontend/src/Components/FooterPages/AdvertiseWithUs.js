import React from 'react';
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import star from "../images/Packages/Star.jpg";

const AdvertiseWithUs = () => {

  const packages = [
    { id: "1", name: 'STAR PACKAGE', img:`${star}`, },
    { id: "2", name: 'SILVER PACKAGE', img:`${star}`, },
    { id: "3", name: 'DIAMOND PACKAGE', img:`${star}`, },
    { id: "4", name: 'PREMIUM PACKAGE', img:`${star}` ,},
    { id: "5", name: 'GOLD PACKAGE', img:`${star}`, },
    { id: "6", name: 'SAPPHIRE PACKAGE', img:`${star}`, },
  ]

  return (
    <>
      <Navbar />
      <h2 className='privacy-policy my-3'>
        Advertise With Us
      </h2>
        <div className='advertise-with-us'>
        {packages.map((packageDet, index, key ) => (

        <div className="flip-card" key={index} id={key} >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={packageDet.img} alt="Avatar" style={{ width: "200px", height: "200px" }} />
            </div>
            <div className="flip-card-back">
              <h1>{packageDet.name}</h1>
              <button>Read More</button>
            </div>
          </div>
        </div>
        ))}
      </div>
      
      
      <Footer />
    </>
  )
}

export default AdvertiseWithUs





//  <div className='advertise-with-us-div'>
//             <img src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=" alt=""/>
//             <button className='my-3'>Read More</button>
//           </div>
          // <div className='advertise-with-us-div'></div>
          // <div className='advertise-with-us-div'></div>
          // <div className='advertise-with-us-div'></div>
          // <div className='advertise-with-us-div'></div>
          // <div className='advertise-with-us-div'></div>
          // <div className='advertise-with-us-div'></div>