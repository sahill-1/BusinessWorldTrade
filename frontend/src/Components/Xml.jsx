import React from 'react'

export default function Xml(props) {
  return (
    <div className='card' style={{ width:"90%", height:"130px", borderRadius:"36%", boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px", margin:"auto"}}>
                <img style={{width:"80%", height:"70%", margin:"auto"}} className='product--image' src={props.url} alt={props.name} />
            </div>
  )
}
