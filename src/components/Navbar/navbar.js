import React from "react";
import './navbar.css';
import {Link } from 'react-scroll';
import "./navbar.css";
import contactImage from '../../assets/contact.png';
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="desktopMenu"> 
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About me</Link>
                <Link className="desktopMenuListItem">Projects</Link>
            </div>
            <button className="desktopMenuButton"> <img src={contactImage} alt="" className="desktopMenuImage" /> contact </button>
        </nav>
    );
}

export default Navbar;