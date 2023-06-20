import React from 'react'
import Banner from './Banner'
import EasyTicker from "./EasyTicker"

const Header = () => {
    return (
        <div className="Header-Banner-Ticker" style={{ width: "100%", display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <Banner/>
            <EasyTicker/>
        </div>
    )
}

export default Header;