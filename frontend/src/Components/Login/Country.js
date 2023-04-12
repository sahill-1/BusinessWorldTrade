import React, { useState, useEffect } from 'react';

function Country() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(data => setCountries(data));
  }, []);

  return (
    <select>
      {countries.map(country => (
        <option key={country.alpha2Code} value={country.name}>
          {country.name}
        </option>
      ))}
    </select>
  );
}

export default Country;
