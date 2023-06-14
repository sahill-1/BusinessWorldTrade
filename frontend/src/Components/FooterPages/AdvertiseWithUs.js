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
      <h1 className='privacy-policy my-3'>
        Advertise With Us
      </h1>
      <div className='advertise-with-us'>
        {products.map((product,index,key)=>
        <div className="  wrapper" key={index} id={key}>
        <div className="card front-face">
          <img src={product.img} />
        </div>
        <div className="card back-face">
          <img src={product.img}/>
          <div className="info">
            <div className="title">{product.name}</div>
            <a href={product.pdf} target='_blank' rel="noreferrer">
            <button>Read More...</button>
            </a>
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

