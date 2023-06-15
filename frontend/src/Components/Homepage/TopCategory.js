import React from 'react';

const categories = [
  {
    title: 'Agriculture',
    image: 'https://gumlet.assettype.com/swarajya%2F2020-08%2F7f5acda4-8891-49fc-9f28-f339d0b98c23%2FAg_tech.jpeg?q=75&auto=format%2Ccompress&w=1200',

  },
  {
    title: 'Apparel & Fashion',
    image: 'https://gumlet.assettype.com/swarajya%2F2020-08%2F7f5acda4-8891-49fc-9f28-f339d0b98c23%2FAg_tech.jpeg?q=75&auto=format%2Ccompress&w=1200',

  },
  {
    title: 'Food & Beverages',
    image: 'https://gumlet.assettype.com/swarajya%2F2020-08%2F7f5acda4-8891-49fc-9f28-f339d0b98c23%2FAg_tech.jpeg?q=75&auto=format%2Ccompress&w=1200',

  },
  {
    title: 'Pharmaceutical',
    image: 'https://gumlet.assettype.com/swarajya%2F2020-08%2F7f5acda4-8891-49fc-9f28-f339d0b98c23%2FAg_tech.jpeg?q=75&auto=format%2Ccompress&w=1200',
  },
  {
    title: 'Spices',
    image: 'https://gumlet.assettype.com/swarajya%2F2020-08%2F7f5acda4-8891-49fc-9f28-f339d0b98c23%2FAg_tech.jpeg?q=75&auto=format%2Ccompress&w=1200',
  },
  {
    title: 'Oil & Fuel',
    image: 'https://gumlet.assettype.com/swarajya%2F2020-08%2F7f5acda4-8891-49fc-9f28-f339d0b98c23%2FAg_tech.jpeg?q=75&auto=format%2Ccompress&w=1200',
  },
  {
    title: 'Energy and Power',
    image: 'https://gumlet.assettype.com/swarajya%2F2020-08%2F7f5acda4-8891-49fc-9f28-f339d0b98c23%2FAg_tech.jpeg?q=75&auto=format%2Ccompress&w=1200',
  },
  {
    title: 'Hardware',
    image: 'https://gumlet.assettype.com/swarajya%2F2020-08%2F7f5acda4-8891-49fc-9f28-f339d0b98c23%2FAg_tech.jpeg?q=75&auto=format%2Ccompress&w=1200',
  },
  
];

const TopCategory = () => {
  return (
    <>
    <h1 className='privacy-policy my-3'>
    Top Categories
  </h1>
  <div className='top-category'>
    {categories.map((category,index,key)=>
    <div className="Wrapper" key={index} id={key}>
    <div className="Card ">
      <img src={category.image} alt=''/>
      <h4>{category.title}</h4>
    </div>
    
  </div>
    )}
  
  </div>
  </>
  );
};

export default TopCategory;