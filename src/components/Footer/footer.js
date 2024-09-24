import React from 'react';
import './footer.css';
import ReactLogo from "../../assets/react-logo.png";
import  NodeLogo from "../../assets/nodejs-logo.png";

export const Footer = () => {
  return (
    <footer className='footer'>
        This website was built using
        <img src={ ReactLogo } alt="" className='logo'/>
        <img src={ NodeLogo } alt="" className='logo'/>
    </footer>
  );
}

export default Footer;