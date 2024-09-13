import React from "react";
import './navbar.css';
import {Link } from 'react-scroll';
import "./navbar.css";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="desktopMenu"> 
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About me</Link>
                <Link className="desktopMenuListItem">Projects</Link>
            </div>
            <button className="desktopMenuButton"> <img src="" alt="" className="desktopMenuImage" /> contact </button>
        </nav>
    );
}

export default Navbar;