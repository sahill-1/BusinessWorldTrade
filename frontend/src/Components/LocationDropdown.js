import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryDropdown = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all')
      .then(response => setCountries(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleCountryChange = (event) => {
    const countryCode = event.target.value;
    setSelectedCountry(countryCode);
    axios.get(`https://api.countrystatecity.in/v1/countries/${countryCode}/states`, {
      headers: {
        'X-CSCAPI-KEY': '<YOUR_API_KEY_HERE>'
      }
    })
      .then(response => setStates(response.data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select a country</option>
        {countries.map(country => (
          <option key={country.alpha2Code} value={country.alpha2Code}>{country.name}</option>
        ))}
      </select>

      {selectedCountry && (
        <select>
          <option value="">Select a state</option>
          {states.map(state => (
            <option key={state.id} value={state.id}>{state.name}</option>
          ))}
        </select>
      )}
    </div>
  );
};

export default CountryDropdown;
