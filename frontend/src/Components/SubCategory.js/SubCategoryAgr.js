import React from 'react'

const SubCategoryAgr = () => {
    const products = [
        {
          id: 1,
          title: 'Product 1',
          image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        },
        {
          id: 2,
          title: 'Product 2',
          image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        },
        {
          id: 3,
          title: 'Product 3',
          image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        },
        {
            id: 4,
            title: 'Product 4',
            image: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg',
          },
          {
            id: 5,
            title: 'Product 5',
            image: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg',
          },
          {
            id: 6,
            title: 'Product 6',
            image: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg',
          },
        
      ];
  return (
    <>
        <div className='ctg-agriculture'>
            Home /  <span > AGRICULTURE / <span style={{ color: "red", cursor: "pointer" }}> SUB-CATEGORY</span></span>
        </div>
        <div className="category-page">
      {/* <h1>Sub Category</h1> */}
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <div className="product-title">{product.title}</div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default SubCategoryAgr
