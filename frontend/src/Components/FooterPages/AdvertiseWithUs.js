import React from 'react';
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import star from '../images/star icon-01.jpg'
import silver from '../images/silver icon-01.jpg'
import premium from '../images/premium icon-01.jpg'
import sapphire from '../images/sapphire icon-01.jpg'
import gold from '../images/gold icon-01.jpg'
import platinum from '../images/platinum icon-01.jpg'
import standard from '../images/standard icon-01.jpg'
import diamond from '../images/diamond icon-01.jpg'
import starpdf from './PDFfiles/STAR.pdf'
import diamondpdf from './PDFfiles/DIAMOND.pdf'
import standardpdf from './PDFfiles/STANDARD.pdf'
import platinumpdf from './PDFfiles/PLATINUM .pdf'
import premiumpdf from './PDFfiles/PREMIUM new.pdf'
import sapphirepdf from './PDFfiles/SAPHIRE.pdf'
import silverpdf from './PDFfiles/SILVER.pdf'
import goldpdf from './PDFfiles/GOLD.pdf'
import { Link } from 'react-router-dom';
import packages from '../images/packages-01.jpg'

const AdvertiseWithUs = () => {
  const products=[
    {id:"1",name:"STAR PACKAGE",img:`${star}` ,pdf:`${starpdf}`},
    {id:"2",name:"SILVER PACKAGE",img:`${silver}`,pdf:`${silverpdf}`},
    {id:"3",name:"GOLD PACKAGE",img:`${gold}` ,pdf:`${goldpdf}`},
    {id:"4",name:"BRONZE PACKAGE",img:`${standard}`,pdf:`${standardpdf}`},
    {id:"5",name:"DIAMOND PACKAGE",img:`${diamond}`,pdf:`${diamondpdf}` },
    {id:"6",name:"PALTINUM PACKAGE",img:`${platinum}`,pdf:`${platinumpdf}` },
    {id:"7",name:"PREMIUM PACKAGE",img:`${premium}`,pdf:`${premiumpdf}` },
    {id:"8",name:"SAPPHIRE PACKAGE",img:`${sapphire}`,pdf:`${sapphirepdf}` }
  ]
  return (
    <>
  <Navbar/>
      {/* about banner start */}
  <div className="container-fluid contactus-banner gap py-5 mb-4 " style={{
    backgroundImage: `url(${packages})`,
    backgroundRepeat:" no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    }}>
    <div className="row py-5">
      <div className="col-12 text-center text-light pt-3">
        <h5 style={{fontSize:"30px",fontWeight:"bold"}}>CHOOSE YOUR PACKAGES ACCORDING TO YOUR BUSINESS NEED</h5>
      </div>
      <div className="col-12 text-center text-light pb-3 banner-head" >
        <h1 style={{
         fontFamily: 'Poppins, sans-serif',
    fontWeight: '800 ',
    color:"white"
    }}> PACKAGES </h1>
      </div>
    </div>
  </div>
  {/* about banner start */}
      <div className='advertise-with-us'>
        {products.map((product,index,key)=>
        <div className="  wrapper" key={index} id={key}>
        <div className="card front-face">
          <img src={product.img} alt=''/>
        </div>
        <div className="card back-face">
        <a href={product.pdf} target='_blank' rel="noreferrer"><img src={product.img}  alt=''/></a>
          <div className="info">
            <div className="title">{product.name}</div>           
               <button className='me-2'>Read More</button>
            <Link to='/checkout'><button className='ms-2 me-2' style={{padding:"11px 15px"}}>Buy Now</button></Link>         
          </div>
        </div>
      </div>
        )}
      
      </div>
    <Footer/>
    </>
  )
}

export default AdvertiseWithUs

