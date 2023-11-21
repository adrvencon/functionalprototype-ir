import React from 'react';
import '../App.css';
import '../static/css/home/home.css'; 
import { Button } from 'reactstrap';
import { Link, Route } from 'react-router-dom';

export default function dashboardMock(){

    
    const linkStyle = {
        color: '#4F200D',
    };

    return(
        <div className="home-page-container">
            <div className="hero-div">
                <h1>Arroceros Del Bajo Guadalquivir</h1>
                <h2>Sociedad Cooperativa Andaluza El Reboso</h2>  
            </div>
        </div>
    );
}