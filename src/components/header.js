import React from 'react';
import '../assets/css/header.css';
import logo from '../assets/images/forkandknife.png';

export default props => {
    return (
        <div id="header" className="valign-wrapper">
            <img src={logo} className="logo rotate brand-logo"/>
            <h1 className="center-align">Next Meal OC</h1>
        </div>
    )
}