import React from 'react';
import { Link } from 'react-router-dom';
import MyIMG from '../../assets/mahmoud.jpg';
import Typical from 'react-typical';
import './home.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faWhatsapp,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import cv from "../../assets/CV.pdf";

export const Home = () => {
  return (
    <div className="home">
        <div className="profile-img">
            <img src={MyIMG} alt="Mahmoud Nabil" />
        </div>
        <div className="home-content">
            <h3>
                <Typical
                    steps={['Hello, I\'M Mahmoud Nabil',5000]}
                    loop={Infinity}
                    wrapper="h3"
                />
            </h3>
            <p>
                
                <Typical
                    steps={['Material Science Engineering',2000,'React Developer',2000,'Front-end Developer',2000,'Talanted Programmer',2000]}
                    loop={Infinity}
                    wrapper="p"
                />
            </p>
        </div>
        <ul className="profile-links">
               <li>
                   <a href="https://www.linkedin.com/in/mahmoud-nabil-773554148/" target="_blank">
                       <FontAwesomeIcon icon={faLinkedin} />
                    </a>
               </li>
               <li>
                   <a href="https://www.facebook.com/profile.php?id=100005397618833" target="_blank">
                       <FontAwesomeIcon icon={faFacebook} />
                    </a>
               </li>
               <li>
                   <a href="https://api.whatsapp.com/send?phone=201146285867/" target="_blank">
                       <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
               </li>
            </ul>
                  
        <div className="arrows">
            <div className="right-arrow">
                <Link to="/about"> <i className="fas fa-arrow-right"></i> </Link>
            </div>
        </div>
        <div className="profile-footer">
                <a href={cv} download={true}>Download CV</a>
        </div>
           
        </div>
  )
}
