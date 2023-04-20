import React from 'react'
import styled from "styled-components";
import { useFormik } from "formik";
import { signupSchema } from './signupSchema';
import BackGround from "../images/download.jpg";
import "bootstrap";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: ""
}

const RegistrationForm = () => {

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
        {/* Animated CSS BackGround */}
        <div class="area" >
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div >
        {/* style={{ backgroundImage: `url(${BackGround})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', opacity: "0.8" }} */}
        <div className="container" >
          <div className="modal" >
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Welcome!</h1>
                <p className="modal-desc">
                  To <span style={{ fontWeight: "700" }}>Business World Trade</span>
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="input-block">
                    {/* <label htmlFor="name" className="input-label">
                      Name
                    </label> */}
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
                    {/* <label htmlFor="number" className="input-label">
                      Phone Number
                    </label> */}
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
                    {/* <label htmlFor="email" className="input-label">
                      Email
                    </label> */}
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
                    {/* <label htmlFor="password" className="input-label">
                      Password
                    </label> */}
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
                    {/* <label htmlFor="country" className="input-label">
                      Country
                    </label> */}
                    <select name="country" id="country" value="country" onBlur={handleBlur} >
                      <option value="">Select a country</option>
                      <option value="">A</option>
                      <option value="">B</option>
                    </select>
                  </div>

                  <div className="input-block" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }} >
                    {/* FOR STATES */}
                    <div className="input-block">
                      <label htmlFor="states" className="input-label">
                        State
                      </label>
                      <select
                        name="states"
                        id="states"
                        value={values.states}
                        onBlur={handleBlur}
                      >
                        <option value="">Select a state</option>
                        <option value="">A</option>
                        <option value="">B</option>
                      </select>
                      {errors.state && touched.state ? (
                        <p className="form-error">{errors.state}</p>
                      ) : null}
                    </div>
                    {/* FOR CITIES */}
                    <div className="input-block">
                      <label htmlFor="cities" className="input-label">
                        City
                      </label>
                      <select
                        name="cities"
                        id="citie"
                        value={values.cities}
                        onBlur={handleBlur}
                      >
                        <option value="">Select a city</option>
                        <option value="">A</option>
                        <option value="">B</option>
                      </select>
                      {errors.state && touched.city ? (
                        <p className="form-error">{errors.city}</p>
                      ) : null}
                    </div>
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
                {/* <p className="sign-up">
                  Already have an account? <a href="/">Sign In now</a>
                </p> */}
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
    position: relative;
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
    // height: auto;
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
    font-size: 1rem;
    color: #b22b27;
    margin-bottom: -1px;
  }
  .modal-desc {
    margin: 6px 0 10px 0;
  }
  .modal-left {
    padding: 20px 30px 20px;
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
    margin: 20px 0 0;
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
    margin-bottom: 10px;
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



  //Animated CSS background
//   @import url('https://fonts.googleapis.com/css?family=Exo:400,700');

// *{
//     margin: 0px;
//     padding: 0px;
// }

// body{
//     font-family: 'Exo', sans-serif;
// }


.context {
    width: 100%;
    position: absolute;
    top:50vh;
}

.context h1{
    text-align: center;
    color: #fff;
    font-size: 50px;
}

.area{
    background: #83d1fb !important;  
    background: -webkit-linear-gradient(to left, #fff, #fff );  
    width: 100%;
    height:100vh;
}

.circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.9);
    background: #fff !important;
    animation: animate 25s linear infinite;
    bottom: -150px;
}

.circles li:nth-child(1){
    left: 15%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}

.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9){
    left: 20%;
    width: 25px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}

@keyframes animate {
    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
}
`;

export default RegistrationForm;