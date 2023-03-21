import React, { useState, useEffect } from 'react'

const Country = () => {
    const countries = [
        { id: 1, name: "India" },
        { id: 2, name: "USA" }
    ]

    const [country, setCountry] = useState([]);

    useEffect(() => {
        setCountry(countries)
    }, [     ])

    return (
        <div>
            <select className='form-control'>
                <option value="0">All in India</option>
                {
                    country && country !== undefined ? country.map((ctr, index) => {
                        return(
                            <option value={ctr.id}>{ctr.name}</option>
                        )
                    })
                        : "No Country"
                }
                
            </select>
        </div>
    )
}

export default Country
