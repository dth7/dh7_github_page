import React from 'react';
import './intro.css';
import portrait from '../../assets/portrait.png';
const Intro = () => {
  return (
    <section id="intro">
      <img src={ portrait } alt="Profile" className="bg" />
      <div className="introContent">
        <span className="hello"> Hello, </span>
        <span className="introText"> I'm <span className="introName"> David, <br /> a Software Developer: </span></span>
        <p className="introParagraph"> Ambitious and eager to contribute to application development and implement customer solutions. </p>

      </div>
      <img src={ portrait } alt="Profile" className="bg" />
    </section>
  )
}

export default Intro