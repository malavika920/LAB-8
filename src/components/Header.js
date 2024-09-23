// src/components/Header.js
import React from 'react';

const Header = () => {
    const showMenu = () => {
        document.getElementById('navLinks').style.right = "0";
    };

    const hideMenu = () => {
        document.getElementById('navLinks').style.right = "-200px";
    };

    return (
        <header className="header">
            <nav>
                <a href="index.html"><img src={require('../assets/img/logo.png')} alt="Logo" />
                </a>
                <div className="nav-links" id="navLinks">
                    <i className="fa fa-times" onClick={hideMenu}></i>
                    <ul>
                        <li><a href="">HOME</a></li>
                        <li><a href="about-us.html">ABOUT</a></li>
                        <li><a href="gallery.html">ROOMS</a></li>
                        <li><a href="facilities.html">FACILITY</a></li>
                        <li><a href="contact.html">CONTACT</a></li>
                        <li><a href="signup.html">SIGN UP</a></li>
                        <li><a href="signin.html">SIGN IN</a></li>
                        <li><a href="hosteltbl.html">Route</a></li>
                    </ul>
                </div>
                <i className="fa fa-bars" onClick={showMenu}></i>
            </nav>
            <div className="text-box">
                <h1>Select Hostel that suits you!</h1>
                <p>Let's go together on a new journey of hostel living</p>
                <a href="" className="hero-btn">Visit us to know more</a><br />
             
            </div>
        </header>
    );
};

export default Header;
