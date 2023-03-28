import React from 'react'
import Banner from './Banner'
import EasyTicker from "./Components/EasyTicker"

const Header = () => {
    return (
        <div className='d-flex Header-1' style={{flexDirection:"row", width:"99%", margin:"auto"}}>
            <Banner />
            
            <EasyTicker />
        </div>
    )
}

export default Header
