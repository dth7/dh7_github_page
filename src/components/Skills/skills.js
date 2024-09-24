import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <section id='skills'>
      <span className="skillTitle"> About Me </span>
      <span className="skillDesc"> Dedicated IT professional that is mainly seeking a position as a software developer with a focus in ServiceNow development and ITSM while being open to other positions for learning experiences. Works well within an agile team and understands one’s responsibility in their respective role. Self-motivated and able to continuously gain new knowledge on the latest best practices, technologies, and tools to ensure that the customer is satisfied and to remain a competitive resource. </span>
      <div className="skillBars">
        <div className="skillBar">
            <div className="skillBarText">
              <h1> Known Languages: </h1>
              <p> JavaScript, CSS, HTML, Java, C, Python, XML, JSON </p>
            </div>
        </div>
        <div className="skillBar">
            <div className="skillBarText">
              <h1> Known Development Tools: </h1>
              <p> IntelliJ, Eclipse, Visual Studio Code, Visual Studio, Microsoft Office (Word, Excel, PowerPoint, Outlook, Teams), Slack, Linear Gitflow Agile Process, Photoshop, Heroku: Cloud Application Platform, React, NodeJS, NextJS, GitHub, GitLab, REST webservices, AJAX, GlideRecord/System/Form/User  </p>
            </div>
        </div>
        <div className="skillBar">
            <div className="skillBarText">
              <h1> Certifications: </h1>
              <p> ServiceNow Certified Systems Adminstrator - June 2024 </p>
            </div>
        </div>
      </div>
    </section>

  );
}

export default Skills;