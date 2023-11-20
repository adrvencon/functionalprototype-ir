import React, { useState } from "react";
import { Alert } from "reactstrap";
import FormGenerator from "../../components/formGenerator/formGenerator";
import tokenService from "../../services/token.service";
import "../../static/css/auth/authButton.css";
import { loginFormInputs } from "./form/loginFormInputs";
import { Link, Route } from 'react-router-dom';

export default function Login() {
  const [message, setMessage] = useState(null)
  const loginFormRef = React.createRef();      
  

  async function handleSubmit({ values }) {
    window.location.href = "/dashboardMock";      
  }
  const linkStyle = {
    color: '#4F200D',
  };

  
    return (
      <div className="home-page-container">
        <div className="hero-div">
        {message ? (
          <Alert color="primary">{message}</Alert>
        ) : (
          <></>
        )}

        <h1>Login</h1>
        <h5>Please, introduce the PIN:</h5>

        <div className="auth-form-container">
          <FormGenerator
            ref={loginFormRef}
            inputs={loginFormInputs}
            onSubmit={handleSubmit}
            numberOfColumns={1}
            listenEnterKey
            buttonText="Login"
            buttonClassName="auth-button"
          />
        </div>

        <p style={{ marginTop: '10px' }}>
          {' '} No PIN? <Link to="/register" style={linkStyle}>Register</Link> now to access the information system.
        </p> 
        </div>
      </div>
    );  
}