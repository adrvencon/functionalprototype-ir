import "../../static/css/auth/authButton.css";
import "../../static/css/auth/authPage.css";
import tokenService from "../../services/token.service";
import FormGenerator from "../../components/formGenerator/formGenerator";
import { registerFormOwnerInputs } from "./form/registerFormOwnerInputs";
import { registerFormVetInputs } from "./form/registerFormVetInputs";
import { registerFormClinicOwnerInputs } from "./form/registerFormClinicOwnerInputs";
import { useEffect, useRef, useState } from "react";
import { Link, Route } from 'react-router-dom';

export default function Register() {

  const registerFormRef = useRef();

  function handleSubmit({ values }) {
    alert('Email sent! Please check your inbox for the PIN.');
    window.location.href = "/";
  }
  const linkStyle = {
    color: '#4F200D',
  };

    return (
      <div className="home-page-container">
        <div className="hero-div">
        <h1>Register</h1>
        <h5>We'll send you an email with the PIN:</h5>
        <div className="auth-form-container">
          <FormGenerator
            ref={registerFormRef}
            inputs={
              registerFormClinicOwnerInputs 
            }
            onSubmit={handleSubmit}
            numberOfColumns={1}
            listenEnterKey
            buttonText="Save"
            buttonClassName="auth-button"
          />
        </div>
        <p style={{ marginTop: '10px' }}>
          {' '} Already registered? <Link to="/login" style={linkStyle}>log in</Link> now to access the information system.
        </p> 
        </div>
      </div>
    );
}
