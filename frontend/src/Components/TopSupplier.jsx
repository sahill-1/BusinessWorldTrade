import React from 'react'

export default function TopSupplier(props) {
  return (
    <div className='card ' style={{ width:"80%", height:"110px", borderRadius:"60px", margin:"auto", border:"2px solid grey"}}>
                <img style={{width:"80%", height:"70%", margin:"auto"}} className='product--image' src={props.url} alt={props.name} />
            </div>
  )
}
