import React from 'react';
import { Link } from 'react-router-dom';
import'./about.styles.scss';
// import'./about.css';
import cv from "../../assets/CV.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen,faLocationDot,faEnvelope,faStar,faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import PersonInformation from './personInformation';
import { Langages } from './languages';
import Skill from './skills';
import LeftArrow from '../arrows/leftArrow';
import RightArrow from '../arrows/rightArrow';


const About = () => {
  return (
    <div>
    <div className="about-section container">
    <div className="row">
    <div className="col-lg-7">
      <div className="about-me">
      
        <p>My Little Story</p>
        <h2>About Me</h2>
        
            
      <h5>I'm a Metallurgical Engineer graduate from the faculty of petroleum engineering at Suze university and a talented Front end Developer From Egypt. I develop websites.  Interested in trying to keep up with modern and modern designs, and taking care of web features, while maintaining ease of use, and maximizing the benefit of simplicity and elegance, are the controls that I commit to in all my projects.</h5>
      <a href={cv} download><button className="mt-3"> Download My Resume</button> </a>
        
        
        </div>
        <div className="Education">
        <h2>Education</h2>
        <h5 className='mt-4'>- bachelor degree in <span> Material Science Engineering  – 2020</span> </h5>
        <h5 className='mt-4'>- Web Developer<span> YAT Learning Center</span> -Ministry of Communication and Information Technology (MCIT) 8/2020 – 11/2021 </h5>
        <h5 className='mt-4'>- React Developer<span>African App Launchpad (AAL)</span>-Ministry of Communication and Information Technology (MCIT) 1/2020 – 6/2020 </h5>
        <h5 className='mt-4'>- High School in <span> Information Technology School  – 2015</span> </h5>
        </div>
        <div className="Education">
        <h2>Competitions and prizes</h2>
        <h5 className='mt-4'>- I got <span>first place in Egypt</span> at the level of advanced institutes and schools in programming the five-year system </h5>
        <h5 className='mt-4'>- we got<span> second place in the finalists in the innovegypt program it is an entrepreneurship program</span> supported by the Ministry of Communications. </h5>
        <h5 >- Participated as group leader and learned how to get our idea to become a real startup through how to build a Persona, Business Model (BMC) and Design Thinking strategies  </h5>
        </div>
    </div>
    
   
                     

    <div className="skllis col-lg-5">   
        <PersonInformation />
        <Langages />
        <Skill /> 
        </div>
        </div>
    </div>

    <div className="arrows">
        <LeftArrow link="/"/>
        <RightArrow link="/projects" />
    </div>
    </div>

    
)
}

export default About