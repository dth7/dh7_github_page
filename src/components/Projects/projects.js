import React from 'react'
import './projects.css';

export const Projects = () => {
  return (
    <section id='projects'>
        <h2 className='projectsTitle'> Projects </h2>
   
        <div className="projectBars">
            <div className="projectBar">
                <div className="projectBarText">
                <h3> Automated Scheduled Events Social Media Bot (OnGoing) </h3>
                <p> Using Instagram's GRAPH API and Google's Calendar API, this bot will be automated for posting scheduled events on organizations' social media, specifically stories. This is being developed for the purpose of spreading information and awareness to interested followers of the organizations, in order to better communicate with their audience.  </p>
                </div>
            </div>
            <div className="projectBar">
                <div className="projectBarText">
                <h3> MNTL - Mental Health Application </h3>
                <p> Aimed to help at-risk individual users, its purpose is to provide resources and materials on self-help, as well as assess the user's state through a quiz evaluation and provide relevant resources. As for technological tools used, Heroku was used for webhosting, React JS library was used for the front end, and Next.js was used for the framework to provide the web application with server-side rendering and website generation. </p>
                <a className="projectLink" href="https://github.com/Innovate-GMU/MNTL"> Project's Respository </a>
                </div>
            </div>
            <div className="projectBar">
                <div className="projectBarText">
                <h3> DNS Manual Query Request & Response Parser  </h3>
                <p> Python program that takes a hostname provided as an argument, prepares and sends it as a query message for the given hostname's server; which, will parse the response and give back the answer. Purpose of this project was to have the basic understanding of the operations for DNS protocol. </p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Projects;
