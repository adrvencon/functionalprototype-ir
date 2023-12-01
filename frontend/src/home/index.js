import React from 'react';
import '../App.css';
import '../static/css/home/home.css'; 
import { Button } from 'reactstrap';
import { Link, Route } from 'react-router-dom';

global.operationsList = [];
global.partnerList = [];
global.productList = [];

export default function Home(){

    
    const linkStyle = {
        color: '#4F200D',
    };

    return(
        <div className="home-page-container">
            <div className="hero-div">
                <h1>Arroceros Del Bajo Guadalquivir</h1>
                <h2>Sociedad Cooperativa Andaluza El Reboso</h2>  
                <h5>
                    {' '} <Link to="/register" style={linkStyle}>Register</Link> or {' '}<Link to="/login" style={linkStyle}>log in</Link> to access the information system.
                </h5>         
            </div>
        </div>
    );
}