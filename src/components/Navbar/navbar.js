import React from "react";
import './navbar.css';
import { Link } from 'react-scroll';
import "./navbar.css";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="desktopMenu"> 
<<<<<<< HEAD
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About me</Link>
            </div>
            <button className="desktopMenuButton"> <img src={ contactImage } alt="" className="desktopMenuImage" /> contact </button>
=======
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About me</Link>
                <Link className="desktopMenuListItem">Projects</Link>
            </div>
            <button className="desktopMenuButton"> <img src="" alt="" className="desktopMenuImage" /> contact </button>
>>>>>>> d03564601fd71781b43739b83a5722cdd7965c65
        </nav>
    );
}

export default Navbar;