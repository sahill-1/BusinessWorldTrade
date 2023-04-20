import React, {useState, useEffect} from 'react'
import axios from "axios";
import styled from "styled-components";
import { useFormik } from "formik";
import { signupSchema } from './signupSchema';
import BackGround from "../images/download.jpg";
import country from "./Country.json";
import state from "./State.json";;


const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: ""
}

const RegistrationForm = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([])
  const [selectedCountry, setselectedCountry] = useState("")
  const [selectedState, setselectedState] = useState("");

  useEffect(() => {
      axios.get("https:/your-api-url/countries")
      .then(response => setCountries(response.data))
      .catch(error => console.error(error))
  }, []); 
  console.log(countries)
  const handleCountryChange = (event) => {
    const countryId = event.target.value;
    setselectedCountry(countryId)
    axios.get(`https://your-api-url/states?countryId=${countryId}`)
    .then(response => setCities(response.data))
    .error(error => console.error(error));
  }
  
  // For Country List
  // const [countries, setCountries] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost/devopsdeveloper/country/")
  //   .then(res => res.json())
  //   .then(data => setCountries(data))
  // }, []);
  // console.log(countries);
  // For State List
  // const [states, setStates] = useState([]);
  // useEffect(() => {
  //   fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states")
  //   .then(res => res.json())
  //   .then(dataRes => setStates(dataRes.states))
  // }, [])
  // console.log(states)


  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        console.log(
          values
        );
        action.resetForm();
      }
    });
  // console.log(
  //   errors
  // );


  return (
    <>
      <Wrapper>
        <div className="container" >
          <div className="modal" style={{ backgroundImage: `url(${BackGround})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', opacity: "0.8" }}>
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Welcome!</h1>
                <p className="modal-desc">
                  To <span style={{ fontWeight: "700" }}>Business World Trade</span>
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="input-block">
                    <label htmlFor="name" className="input-label">
                      Name
                    </label>
                    <input
                      type="name"
                      autoComplete="off"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="number" className="input-label">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      autoComplete="off"
                      name="number"
                      id="number"
                      placeholder="Phone"
                      value={values.number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.number && touched.number ? (
                      <p className="form-error">{errors.number}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="password" className="input-label">
                      Password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}
                  </div>

                  {/* FOR COUNTRY */}
                  <div className="input-block">
                    <label htmlFor="country" className="input-label">
                      Country
                    </label>
                    <select name="country" id="country" value={selectedCountry} onChange={handleCountryChange} onBlur={handleBlur} >
                      <option value="">--Select a country--</option>
                      {countries.map(country => 
                        <option key={country.id} value={country.id}>{country.name}</option>
                        )}
                    </select>
                  
                  </div>

                  {/* FOR STATES */}
                  <div className="input-block">
                    <label htmlFor="states" className="input-label">
                      State
                    </label>
                    <select
                      name="states"
                      id="states"
                      value={values.states}
                      // onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      {state.map((getstate, index) => (
                        <option key={index} value={getstate.state_id}>
                          {getstate.state_name }
                        </option>
                      ))}
                    </select>
                    {errors.state && touched.state ? (
                      <p className="form-error">{errors.state}</p>
                    ) : null}
                  </div>

                  <div className="modal-buttons">
                    <a href="/" className="">
                      Want to register using Gmail?
                    </a>
                    <button className="input-button" type="submit">
                      Registration
                    </button>
                  </div>
                </form>
                <p className="sign-up">
                  Already have an account? <a href="/">Sign In now</a>
                </p>
              </div>
              <div className="modal-right">
                <img
                  src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #efedee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    width: 100%;
    
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
    backgroundImage: url(${BackGround})
  }
  .modal-container {
    height: 120vh;
    // border: 1px solid red;
    display: flex;
    max-width: 60vw;
    width: 100%;
    border-radius: 10px;
    overflow: hidden ;
    position: absolute;
    transition-duration: 0.3s;
    background: #fff;
  }
  .modal-title {
    margin: 0;
    font-weight: 400;
    color: #55311c;
  }
  .form-error {
    font-size: 1.4rem;
    color: #b22b27;
  }
  .modal-desc {
    margin: 6px 0 30px 0;
  }
  .modal-left {
    padding: 60px 30px 20px;
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
  }
  .modal-right {
    flex: 2;
    font-size: 0;
    transition: 0.3s;
    overflow: hidden;
  }
  .modal-right img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    -o-object-fit: cover;
    object-fit: cover;
    transition-duration: 1.2s;
  }
  .modal.is-open .modal-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  }
  .modal-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-buttons a {
    color: rgba(51, 51, 51, 0.6);
    font-size: 14px;
  }
  .sign-up {
    margin: 60px 0 0;
    font-size: 14px;
    text-align: center;
  }
  .sign-up a {
    color: #8c7569;
  }
  .input-button {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 1rem 2rem;
    outline: none;
    text-transform: uppercase;
    border: 0;
    color: #fff;
    border-radius: 4px;
    background: #8c7569;
    transition: 0.3s;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
  }
  .input-button:hover {
    background: #55311c;
  }
  .input-label {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #8c7569;
    transition: 0.3s;
  }
  .input-block {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: 0.3s;
  }
  .input-block input {
    outline: 0;
    border: 0;
    padding: 4px 0 0;
    font-size: 14px;
  }
  .input-block input::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input::placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block:focus-within {
    border-color: #8c7569;
  }
  .input-block:focus-within .input-label {
    color: rgba(140, 117, 105, 0.8);
  }
  @media (max-width: 750px) {
    .modal-container {
      max-width: 90vw;
    }
    .modal-right {
      display: none;
    }
  }
`;

export default RegistrationForm;